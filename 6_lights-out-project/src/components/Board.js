import React, { Component } from 'react'
import Cell from './Cell'
import './Board.css'

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: 0.2,: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasWon: false,
      board: this.createBoard(),
    }
  }

  createBoard = () => {
    const { nrows, ncols, chanceLightStartsOn } = this.props

    const board = Array.from({ length: nrows }, row => {
      return Array.from(
        { length: ncols },
        cell => Math.random() < chanceLightStartsOn
      )
    })

    return board
  }

  /** handle changing a cell: update board & determine if winner */
  flipCellsAround = coord => {
    const { ncols, nrows } = this.props
    let { board } = this.state
    const [y, x] = coord.split('-').map(Number)

    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x]
      }
    }

    //? Flip cell and adjacent cells
    flipCell(y, x)
    flipCell(y - 1, x)
    flipCell(y + 1, x)
    flipCell(y, x - 1)
    flipCell(y, x + 1)

    const hasWon = !board.some(row => row.some(cell => cell))

    this.setState({ board, hasWon })
  }

  /** Render game board or winning message. */
  render() {
    const { board, hasWon } = this.state
    const { nrows, ncols } = this.props
    const boardStyles = {
      gridTemplateColumns: `repeat(${ncols}, 100px)`,
      gridTemplateRows: `repeat(${nrows}, 100px)`,
    }

    if (hasWon) {
      return <h1>You Won</h1>
    }

    return (
      <div className="Board">
        <h1>Lights Out</h1>
        <div className="Board__container">
          <div className="Board__cells" style={boardStyles}>
            {board.map((row, yIndex) => {
              return row.map((cell, xIndex) => {
                return (
                  <Cell
                    key={`${yIndex}-${xIndex}`}
                    coord={`${yIndex}-${xIndex}`}
                    isLit={board[yIndex][xIndex]}
                    flipCellsAroundMe={this.flipCellsAround}
                  />
                )
              })
            })}
          </div>
        </div>
      </div>
    )
  }
}

Board.defaultProps = {
  nrows: 5,
  ncols: 5,
  chanceLightStartsOn: 0.25,
}

export default Board
