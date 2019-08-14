import React from 'react'
import PropTypes from 'prop-types'
import ActivityRow from './ActivityRow'

function daysInThisMonth() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

export default class ActivitySheet extends React.Component {

  // handleChangedCell = ({ x, y }, value) => {
  //   const modifiedData = Object.assign({}, this.state.data)
  //   if (!modifiedData[y]) modifiedData[y] = {}
  //   modifiedData[y][x] = value
  //   this.setState({ data: modifiedData })
  // }


  render() {
    const rows = []
    const activeDaysMap = {}
    this.props.activeDays.forEach(activeDay => {
      activeDaysMap[activeDay.date.join('-')] = activeDay
    });

    for (let i = 0; i < daysInThisMonth(...this.props.month); i += 1) {
      const day = this.props.month.concat([i + 1])
      const activeDay = activeDaysMap[day.join('-')]

      rows.push(
        <ActivityRow
          
          date = {day}
          project = {activeDay ? activeDay.project : null}
          start = {activeDay ? activeDay.start : null}
          end = {activeDay ? activeDay.end : null}
          pause = {activeDay ? activeDay.pause : null}
          comment = {activeDay ? activeDay.comment : null}
          
          handleChangedCell={this.handleChangedCell}
          updateCells={this.updateCells}
          key={i}
        />,
      )
    }
    return (
      <div>
        {rows}
      </div>
    )
  }
}