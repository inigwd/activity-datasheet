import React from 'react'
import DateCell from './DateCell'
import TextCell from './TextCell'
import TimeCell from './TimeCell'
import TotalCell from './TotalCell'


export default class ActivityRow extends React.Component {

  //give the right date for event
  onChangeProject(text) {
    this.props.onChangeProject({ date: this.props.date, text: text })
  }
  onChangeComment(text) {
    this.props.onChangeComment({ date: this.props.date, text: text })
  }
  onChangeStart(start) {
    this.props.onChangeStart({ date: this.props.date, start: start })
  }
  onChangeEnd(end) {
    this.props.onChangeEnd({ date: this.props.date, end: end })
  }
  onChangePause(pause) {
    this.props.onChangePause({ date: this.props.date, pause: pause })
  }
  render() {

    return (
      <tr>
        <DateCell value={this.props.date} />
        <TextCell
          value={this.props.project}
          onTextInput={this.onChangeProject.bind(this)}
        />
        <TimeCell
          value={this.props.start}
          onTextInput={this.onChangeStart.bind(this)}
        />
        <TimeCell
          value={this.props.end}
          onTextInput={this.onChangeEnd.bind(this)}
        />
        <TimeCell
          value={this.props.pause}
          onTextInput={this.onChangePause.bind(this)}
        />
        <TotalCell
          total={this.props.total}
        />
        <TextCell
          value={this.props.comment}
          onTextInput={this.onChangeComment.bind(this)}
        />
      </tr>
    )
  }
}