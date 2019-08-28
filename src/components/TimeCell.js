import React from 'react'

export default class TimeCell extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     validInput: true
        // }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTextInput(e.target.value.split(':').map(el => {
            let n = Number(el);
            return n === 0 ? n : n || el;
        }))

        // let a = null
        // a = e.target.value.split(':').map(el => {
        //     let n = Number(el);
        //     return n === 0 ? n : n || el;
        // })
        // if ((a !== null) && (((typeof a[0]) === 'number') || (typeof a[1]) === 'number')) {
        //     a = a.join(':')
        //     this.setState({ validInput: true })
        //     //    console.log((typeof this.props.value[0])==='number')
        // } else if ((a === null)) {
        //     this.setState({ validInput: true })
        // } else {
        //     this.setState({ validInput: false })
        // }

    }
    render() {
        //styles
        let styles = null
        let normal = {
            border: '1px solid black',
            height: '30px',
            widht: '14%',
            backgroundColor: 'gray',
            color: 'white',
            fontSize: '20px',
            textAlign: 'center'
        };

        let alert = {
            border: '1px solid red',
            height: '30px',
            widht: '14%',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '20px',
            textAlign: 'center'
        }

        let value = this.props.value;
        if ((this.props.value !== null) && (((typeof this.props.value[0]) === 'number') || (typeof this.props.value[1]) === 'number')) {
            value = this.props.value.join(':')
            styles = normal;
            //    console.log((typeof this.props.value[0])==='number')
        } else if ((this.props.value === null)) {
            styles = normal;
        } else {
            styles = alert;
        }

        return (
            <input
                style={styles}
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