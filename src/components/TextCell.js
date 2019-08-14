import React, { useState } from 'react';

export default class TextCell extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e){
          this.props.onTextInput(e.target.value)
      }
    render(){
        const value = this.props.value;
    return (
        <section>
            <input
                // style={css}
                // type="text"
                // onBlur={this.onBlur}
                // onKeyPress={this.onKeyPressOnInput}
                value={value}
                onChange={this.handleChange}
                autoFocus
            />
        </section>
    )}

}