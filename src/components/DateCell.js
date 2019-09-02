import React from 'react';
import Moment from 'react-moment';

export default class DateCell extends React.Component {
    render() {
        const day = this.props.value
        return (
            <td>
                <Moment date={day} format="MMM DD YYYY ddd" />
            </td>
        )
    }
}