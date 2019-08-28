import React from 'react';

export default class TextCell extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTextInput(e.target.value)
    }
    render() {
        let styles = {
            border: '1px solid black',
            height: '30px',
            widht: '14%',
            backgroundColor: 'gray',
            color: 'white',
            fontSize:'20px',
            textAlign:'center'
          };
        return (
            <input
                // style={css}
                // type="text"
                // onBlur={this.onBlur}
                // onKeyPress={this.onKeyPressOnInput}
                value={this.props.value}
                style={styles}
                onChange={this.handleChange}
                autoFocus
            />

        )
    }

}