import React from 'react'

export default class TimeCell extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTextInput(e.target.value)
    }
    render() {

        let value = this.props.value;
        if(this.props.value !== null) {
           value = this.props.value.join(':')
        }
        return (
            <input
                // style={css}
                // onBlur={this.onBlur}
                // onKeyPress={this.onKeyPressOnInput}
                value={value}
                onChange={this.handleChange}
                autoFocus
            />
        )
    }
}

//TODO: validierung und callback an App.js