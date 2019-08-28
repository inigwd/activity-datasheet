import React from 'react'

export default class DateCell extends React.Component {
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
                value={this.props.value.join('-')}
                style={styles}
                readOnly
            />
        )
    }
}