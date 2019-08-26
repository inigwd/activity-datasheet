import React from 'react'
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
    let rows = null;
    rows = (
      <div>
        {this.props.activeDays.map((day, index) => {
          return <ActivityRow
          date = {day.date}
          project = {day.project}
          start = {day.start}
          end = {day.end}
          pause = {day.pause}
          comment = {day.comment}
          
          handleChangedCell={this.handleChangedCell}
          updateCells={this.updateCells}
          key={index}
        />
        })}
      </div>
    )
    
    return (
      <div>
        {rows}
      </div>
    )
  }
}