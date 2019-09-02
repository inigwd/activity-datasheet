import React from 'react';

export default class TextCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false }
    }
    handleFocus = (event) => event.target.select();

    handleClick() {
        this.setState({ selected: !this.state.selected });
    }

    handleDeselect() {
        this.setState({ selected: false });
    }

    handleChange(e) {
        this.props.onTextInput(e.target.value);
    }
    render() {
        let text;
        if (this.state.selected) {
            text = <input
                value={this.props.value}
                onChange={this.handleChange.bind(this)}
                onFocus={this.handleFocus}
                onClick={this.handleClick.bind(this)}
                onBlur={this.handleDeselect.bind(this)}
                autoFocus
            />
        } else if (this.props.value === null){
            text = <span
                onClick={this.handleClick.bind(this)}
                onBlur={this.handleDeselect.bind(this)}
            >{'_________'}</span>
        }else {
            text = <span
                onClick={this.handleClick.bind(this)}
                onBlur={this.handleDeselect.bind(this)}
            >{this.props.value}</span>
        }
        return (<td>{text}</td>)
    }
}