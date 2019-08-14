import React from 'react'

export default class DateCell extends React.Component {
    render() {
        return (
            <span>{this.props.value}</span>
            // <span>{this.props.date.join(' ')}</span>
        )
    }
}