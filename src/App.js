import React from 'react';
import ActivitySheet from './components/ActivitySheet'
import ActiveDay from './ActiveDay'

const currentMonth = new Date()

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this)
    this.state = {
    }
  }

  handleDayChange(input) {
    this.setState({ project: input })
  }

  render() {
    
    return (
      <div style={{ width: 'max-content' }}>
        <ActivitySheet
          month={[
            currentMonth.getFullYear(),
            currentMonth.getMonth() + 1]}
          activeDays={
            [new ActiveDay(
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
          changeDay={this.handleDayChange}
        />
      </div>)
  }
}




//TODO: topdown 