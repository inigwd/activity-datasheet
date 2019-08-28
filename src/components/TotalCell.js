import React from 'react'

export default class TotalCell extends React.Component {
    render() {
        //syles
        let styles = {
            border: '1px solid black',
            height: '30px',
            widht: '14%',
            backgroundColor: 'gray',
            color: 'white',
            fontSize: '20px',
            textAlign: 'center'
        };
        let value = null;
        const inp = this.props.total[0] + ":" + this.props.total[1]
        if (inp === 'NaN:NaN') {
            value = 'Zeitenformat "8:10"'
        } else if (inp === '0:0') {
            value = ' '
        } else if ((typeof this.props.total[0]) === 'number') {
            value = this.props.total[0] + ":" + this.props.total[1]
        }
        return (
            //<span style={styles}>{this.props.total[0]+":"+this.props.total[1]}</span>
            <input
                value={value}
                style={styles}
                readOnly
            />
        )
    }
}