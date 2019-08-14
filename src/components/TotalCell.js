import React from 'react'

export default class TotalCell extends React.Component {
    render() {
        return (
            <span>{this.props.total[0]+":"+this.props.total[1]}</span>
        )
    }
}