import React from 'react';
import ActivitySheet from './components/ActivitySheet';
import ActiveDay from './ActiveDay';
import { Container } from 'react-bootstrap';


const currentMonth = new Date()

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDays: [new ActiveDay(
        [2019, 8, 1],
        "Projekt Name",
        [8, 0],
        [17, 0],
        [0, 30],
        'Core QA Scrum'),
      new ActiveDay(
        [2019, 8, 3],
        "Projekt Name",
        [8, 0],
        [16, 0],
        [1, 0],
        'Core QA Scrum')
      ]
    }
  }

  //updating state activeDays.project
  handleProjectChange = e => {
    const activeDays = [...this.state.activeDays]
    //find existing activeDay
    let foundday = false;
    for (let i = 0; i < activeDays.length; i++) {
      if (activeDays[i].date[0] === e.date[0]) {
        if (activeDays[i].date[1] === e.date[1]) {
          if (activeDays[i].date[2] === e.date[2]) {
            foundday = true;
            //else create new activeDay 
            activeDays[i].project = e.text
            break
          }
        }
      }
    }
    if (!foundday) {
      //else create new activeDay 
      activeDays.push(new ActiveDay(e.date, e.text, null, null, null, null))
    }
    //set new State
    this.setState({ activeDays: activeDays })
  }

  //updating state activeDays.start
  handleStartChange = e => {
    const activeDays = [...this.state.activeDays]
    //find existing activeDay
    let foundday = false;
    for (let i = 0; i < activeDays.length; i++) {
      if (activeDays[i].date[0] === e.date[0]) {
        if (activeDays[i].date[1] === e.date[1]) {
          if (activeDays[i].date[2] === e.date[2]) {
            foundday = true;
            //else create new activeDay 
            activeDays[i].start = e.start
            break
          }
        }
      }
    }
    if (!foundday) {
      //else create new activeDay 
      activeDays.push(new ActiveDay(e.date, null, e.start, null, null, null))
    }
    //set new State
    this.setState({ activeDays: activeDays })
  }

  //updating state activeDays.end
  handleEndChange = e => {
    const activeDays = [...this.state.activeDays]
    //find existing activeDay
    let foundday = false;
    for (let i = 0; i < activeDays.length; i++) {
      if (activeDays[i].date[0] === e.date[0]) {
        if (activeDays[i].date[1] === e.date[1]) {
          if (activeDays[i].date[2] === e.date[2]) {
            foundday = true;
            //else create new activeDay 
            activeDays[i].end = e.end
            break
          }
        }
      }
    }
    if (!foundday) {
      //else create new activeDay 
      activeDays.push(new ActiveDay(e.date, null, null, e.end, null, null))
    }
    //set new State
    this.setState({ activeDays: activeDays })
  }

  //updating state activeDays.pause
  handlePauseChange = e => {
    const activeDays = [...this.state.activeDays]
    //find existing activeDay
    let foundday = false;
    for (let i = 0; i < activeDays.length; i++) {
      if (activeDays[i].date[0] === e.date[0]) {
        if (activeDays[i].date[1] === e.date[1]) {
          if (activeDays[i].date[2] === e.date[2]) {
            foundday = true;
            //else create new activeDay 
            activeDays[i].pause = e.pause
            break
          }
        }
      }
    }
    if (!foundday) {
      //else create new activeDay 
      activeDays.push(new ActiveDay(e.date, null, null, null, e.pause, null))
    }
    //set new State
    this.setState({ activeDays: activeDays })
  }


  //updating state activeDays.comment
  handleCommentChange = e => {
    const activeDays = [...this.state.activeDays]
    //find existing activeDay
    let foundday = false;
    for (let i = 0; i < activeDays.length; i++) {
      if (activeDays[i].date[0] === e.date[0]) {
        if (activeDays[i].date[1] === e.date[1]) {
          if (activeDays[i].date[2] === e.date[2]) {
            foundday = true;
            //if there is one update
            activeDays[i].comment = e.text
            break
          }
        }
      }
    }
    if (!foundday) {
      //else create new activeDay 
      activeDays.push(new ActiveDay(e.date, null, null, null, null, e.text))
    }
    //set new State
    this.setState({ activeDays: activeDays })
  }


  render() {

    const month = [
      currentMonth.getFullYear(),
      currentMonth.getMonth()]
    //creat state for one month from inicial month and data
    const rows = []
    const activeDaysMap = {}
    this.state.activeDays.forEach(activeDay => {
      activeDaysMap[activeDay.date.join('-')] = activeDay
    });

    for (let i = 0; i < daysInThisMonth(month); i += 1) {
      const day = month.concat([i + 1])
      const activeDay = activeDaysMap[day.join('-')]

      rows.push(
        new ActiveDay(
          day,
          (activeDay ? activeDay.project : null),
          (activeDay ? activeDay.start : null),
          (activeDay ? activeDay.end : null),
          (activeDay ? activeDay.pause : null),
          (activeDay ? activeDay.comment : null)
        )
      )
    }

    return (
      <Container fluid='true'>
        <div>
          <ActivitySheet
            month={month}
            activeDays={rows}
            onChangeProject={this.handleProjectChange.bind(this)}
            onChangeComment={this.handleCommentChange.bind(this)}
            onChangeStart={this.handleStartChange.bind(this)}
            onChangeEnd={this.handleEndChange.bind(this)}
            onChangePause={this.handlePauseChange.bind(this)}
          />
        </div>
      </Container>
    )
  }
}

function daysInThisMonth() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}
