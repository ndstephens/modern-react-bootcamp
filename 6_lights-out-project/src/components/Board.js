import React, { Component } from 'react'
import Cell from './Cell'
import './Board.css'

/** Game board of Lights out.
 *
 * Properties:
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
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

    // const board = Array.from({ length: nrows }, row => {
    //   return Array.from(
    //     { length: ncols },
    //     cell => Math.random() < chanceLightStartsOn
    //   )
    // })

    const board = []
    for (let y = 0; y < nrows; y++) {
      const row = []
      for (let x = 0; x < ncols; x++) {
        row[x] = Math.random() < chanceLightStartsOn
      }
      board.push(row)
    }

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
    flipCell(y, x) // the cell
    flipCell(y - 1, x) // above
    flipCell(y + 1, x) // below
    flipCell(y, x - 1) // left
    flipCell(y, x + 1) // right

    //? Check is game is won (all cells are 'false')
    const hasWon = board.every(row => row.every(cell => !cell))

    this.setState({ board, hasWon })
  }

  /** Render game board or winning message. */
  render() {
    if (this.state.hasWon) {
      return (
        <div className="Board__title winner">
          <span className="neon neon-orange">YOU</span>{' '}
          <span className="neon neon-blue">WON!!</span>
        </div>
      )
    }

    const { board } = this.state
    const { nrows, ncols } = this.props
    const boardStyles = {
      gridTemplateColumns: `repeat(${ncols}, 1fr)`,
      gridTemplateRows: `repeat(${nrows}, 1fr)`,
    }

    return (
      <div className="Board">
        <div className="Board__title">
          <span className="neon neon-orange">Lights</span>{' '}
          <span className="neon neon-blue">Out</span>
        </div>
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
  chanceLightStartsOn: 0.2,
}

export default Board
