import React from 'react';

export default class TextCell extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e){
          this.props.onTextInput(e.target.value)
      }
    render(){
    return (
        <section>
            <input
                // style={css}
                // type="text"
                // onBlur={this.onBlur}
                // onKeyPress={this.onKeyPressOnInput}
                value={this.props.value}
                onChange={this.handleChange}
                autoFocus
            />
        </section>
    )}

}