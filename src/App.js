import React from 'react';
import ActivitySheet from './components/ActivitySheet'
import ActiveDay from './ActiveDay'
import { arrayExpression } from '@babel/types';


function daysInThisMonth() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

const currentMonth = new Date()

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this)
    this.state = {
      data:
      {
        month: [
          currentMonth.getFullYear(),
          currentMonth.getMonth() + 1],
        activeDays: [new ActiveDay(
          [2019, 8, 1],
          "Hann-Rück/Reflex",
          [8, 0],
          [17, 0],
          [0, 30],
          'Core QA Scrum'),
        new ActiveDay(
          [2019, 8, 3],
          "Hann-Rück/Reflex",
          [8, 0],
          [16, 0],
          [1, 0],
          'Core QA Scrum')
        ]
      }
    }
  }

  handleDayChange(input) {
    this.setState({ project: input })
  }


  render() {

    //creat state for one month from inicial month and data
    const rows = []
    const activeDaysMap = {}
    this.state.data.activeDays.forEach(activeDay => {
      activeDaysMap[activeDay.date.join('-')] = activeDay
    });

    for (let i = 0; i < daysInThisMonth(...this.state.data.month); i += 1) {
      const day = this.state.data.month.concat([i + 1])
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

    //update state to state from current month
    this.setState = {
      ...this.state.data.month,
      ...this.state.data.activeDays = rows
    }



    return (
      <div style={{ width: 'max-content' }}>
        <ActivitySheet
          month={this.state.data.month}
          activeDays={this.state.data.activeDays}

          changeDay={this.handleDayChange}
        />
      </div>)
  }
}




//TODO: topdown 