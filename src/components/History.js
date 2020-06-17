import React, { Component } from 'react'

export class History extends Component {
    render() {
        const list = this.props.list;
        return (
            <React.Fragment>
                <h1> History </h1>
                <ul>
                    {
                        list.map((history) => {
                           return <li key={history.id}>English : {history.en} | Pig Latin : {history.pl}</li>
                        })
                    }
                </ul>
                <input type="submit" value="Clear History" onClick={this.props.clearHistory} />
            </React.Fragment>
            
        )
    }
}

export default History
