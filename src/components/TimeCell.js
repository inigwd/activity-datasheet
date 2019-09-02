import React from 'react';

const validInput = {}
const invalidInput = {
    backgroundColor: 'red',
}

export default class TimeCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false, isValid: timeValidation(this.props.value).isValid };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSelect = this.handleSelect.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleFocus = (event) => event.target.select();

    handleDeselect() {
        this.setState({ selected: false });
    }

    handleClick() {
        this.setState({ selected: !this.state.selected });
    }

    handleChange(e) {
        this.props.onTextInput(e.target.value.split(':').map(el => {
            let n = Number(el);
            return n === 0 ? n : n || el;
        }))
        this.setState({ selected: this.state.selected, isValid: timeValidation(this.props.value).isValid })
    }

    render() {
        let value = timeValidation(this.props.value)
        let time;
        let style = validInput;

        if (this.state.selected && this.state.isValid) {
            time = <input
                value={value.time}
                onChange={this.handleChange.bind(this)}
                onFocus={this.handleFocus}
                onClick={this.handleClick.bind(this)}
                onBlur={this.handleDeselect.bind(this)}
                autoFocus
            />
        } else if (this.state.selected && this.state.isValid === false) {
            style = invalidInput
            time = <input
                value={value.time}
                onChange={this.handleChange.bind(this)}
                onFocus={this.handleFocus}
                onClick={this.handleClick.bind(this)}
                onBlur={this.handleDeselect.bind(this)}
                autoFocus
            />
        } else if (!this.state.selected && this.state.isValid === false) {
            style = invalidInput
            time = <span
                onChange={this.handleChange.bind(this)}
                onFocus={this.handleFocus}
                onClick={this.handleClick.bind(this)}
            >{value.time}</span>

        } else if (this.props.value === null) {
            //shows placeholder '--:--'
            time = <span
                onChange={this.handleChange.bind(this)}
                onFocus={this.handleFocus}
                onClick={this.handleClick.bind(this)}
            >{'--:--'}</span>
        } else {
            //shows valid time
            time = <span
                onChange={this.handleChange.bind(this)}
                onFocus={this.handleFocus}
                onClick={this.handleClick.bind(this)}
            >{value.time}</span>
        }
        return (<td style={style}>{time}</td>)
    }
}

function timeValidation(data) {
    let value = data;
    let validation;
    if ((data !== null) && (((typeof data[0]) === 'number') || (typeof data[1]) === 'number')) {
        if (data[0] < 25) {
            validation = true;
        } else {
            validation = false;
        }
        value = value.join(':')

        //    console.log((typeof this.props.value[0])==='number')
    } else if ((data === null)) {
        validation = true;
    } else {
        validation = false;
    }
    return { time: value, isValid: validation }
}

//TODO: validierung und callback an App.js