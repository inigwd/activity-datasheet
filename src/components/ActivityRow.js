import React from 'react'
// import PropTypes from 'prop-types'
import DateCell from './DateCell'
import TextCell from './TextCell'
import TimeCell from './TimeCell'
import TotalCell from './TotalCell'

// import Cell from './Cell'
export default class ActivityRow extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleProjectChange = this.handleProjectChange.bind(this);
  //   this.handleCommentChange = this.handleCommentChange.bind(this);
  //   this.handleStartChange = this.handleStartChange.bind(this);
  //   this.state = { 
  //     date : this.props.date,
  //     project : this.props.project,
  //     start : this.props.start,
  //     end : this.props.end,
  //     pause : this.props.pause,
  //     total: '',
  //     comment : this.props.comment
  //    }
  // }

  // handleProjectChange(input) {
  //   this.setState({ project: input })
  // }
  // handleCommentChange(input) {
  //   this.setState({ comment: input })
  // }
  // handleStartChange(input) {
  //   this.setState({ start: input })
  // }


  render() {
    // const date = showDate(this.state.date);
    // const project = this.state.project;
    // const start = this.state.start;
    // const end = this.state.end;
    // const pause = this.state.pause;
    const total = [0,0]//calculateTotalTime(start.join(','),end.join(','),pause.join(','));
    // const comment = this.state.comment;

    return (
      <div>
        <DateCell
          value={this.props.date}
        />
        <TextCell
          value={this.props.project}
          // onTextInput={this.handleProjectChange}
        />
        <TimeCell value={this.props.start} />
        <TimeCell value={this.props.end} />
        <TimeCell value={this.props.pause} />
        <TotalCell total={total} />
        <TextCell value={this.props.comment} />
      </div>
    )
  }
}

// ActivityRow.propTypes = {
//   handleChangedCell: PropTypes.func.isRequired,
//   updateCells: PropTypes.func.isRequired,
//   x: PropTypes.number.isRequired,
//   y: PropTypes.number.isRequired,
//   rowData: PropTypes.shape({
//     string: PropTypes.string,
//   }).isRequired,
// }

function calculateTotalTime(start, end, pause) {
  var ab = []
  var cd = []
  var ef = []

  try {
    ab = start.split(',')
    cd = end.split(',')
    ef = pause.split(',')
    throw { value: "myException " }
  }
  catch (e) {
    //
    console.log(e);
  }
  finally {
    const a = [parseInt(ab[0]), parseInt(ab[1])]
    const b = [parseInt(cd[0]), parseInt(cd[1])]
    const c = [parseInt(ef[0]), parseInt(ef[1])]
    var x = (b[0] * 60 + b[1]) - (a[0] * 60 + a[1]) - (c[0] * 60 + c[1])
    var total = []
    total[0] = Math.floor(x / 60)
    total[1] = x % 60

    if (total[0] === 0) {
      return total
    } else if (!(total[0] / 1)) {
      return "Uhrzeit mit '8,13' eingeben"
    } else if (total[0] < 0 || total[1] < 0) {
      return "es gibt keine negative Zeit"
    } else {
      return total
    }
  }
}


function showDate(initialValue) {
  const date = initialValue
  return date.join(' ');
}