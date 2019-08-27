import React from 'react'
import ActivityRow from './ActivityRow'

function calculateTotalTime(start, end, pause) {
  var total = []
  if (start === null) {
    return total = [0, 0]
  } else if (end === null) {
    return total = [0, 0]
  } else if (pause === null) {
    return total = [0, 0]
  } else {
    var x = (end[0] * 60 + end[1]) - (start[0] * 60 + start[1]) - (pause[0] * 60 + pause[1])
    total[0] = Math.floor(x / 60)
    total[1] = x % 60
    return total
  }
}

export default class ActivitySheet extends React.Component {

  render() {
    let rows = null;
    rows = (
      <div>
        {this.props.activeDays.map((day, index) => {
          return <ActivityRow
            date={day.date}
            project={day.project}
            start={day.start}
            end={day.end}
            pause={day.pause}
            total={calculateTotalTime(day.start, day.end, day.pause)}
            comment={day.comment}
            onChangeProject={this.props.onChangeProject}
            onChangeComment={this.props.onChangeComment}
            onChangeStart={this.props.onChangeStart}
            onChangeEnd={this.props.onChangeEnd}
            onChangePause={this.props.onChangePause}
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