import React from 'react';

export default class TotalCell extends React.Component {
    render() {

        let value = null;
        const inp = this.props.total[0] + ":" + this.props.total[1]
        if (inp === 'NaN:NaN') {
            value = 'Zeitenformat "8:10"'
        } else if (inp === '0:0') {
            value = ' '
        } else if ((typeof this.props.total[0]) === 'number') {
            value = this.props.total[0] + ":" + this.props.total[1]
        }
        return (<td>{value}</td>)
    }
}