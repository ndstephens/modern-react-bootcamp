import React, { Component } from 'react'
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { name, description, score, doScore } = this.props
    const active = score === undefined

    const setClass = active ? 'active' : 'disabled'

    return (
      <tr
        className={`RuleRow RuleRow-${setClass}`}
        onClick={active ? doScore : null}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{active ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow
