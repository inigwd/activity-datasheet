import React from 'react'

export default class TimeCell extends React.Component {
   
render(){
    return (
        // <div>{this.props.time.join(':')}</div>
        <input
            // style={css}
            // onBlur={this.onBlur}
            // onKeyPress={this.onKeyPressOnInput}
            value={this.props.value}
        // onChange={this.onChange}
        // autoFocus
        />
    )
}
}

//TODO: validierung und callback an App.js