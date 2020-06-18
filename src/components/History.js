import React, { Component } from 'react'

export class History extends Component {
    render() {
        const list = this.props.list;
        return (
            <React.Fragment>
                
                <div className="form-group" style={{paddingTop : "20px"}}>
                    <h1> History </h1>
                    <table className="table table-*-responsive table-hover">
                        <thead>
                            <th>English</th>
                            <th>Pig Latin</th>
                        </thead>
                        <tbody>
                            {
                                list.map((history) => {
                                    return (
                                        <tr key={history.id}>
                                            <td>{history.en}</td>
                                            <td>{history.pl}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                
                <div className="form-group" style={{padding : "20px 0" }}>
                    <input 
                        className="btn btn-outline-primary"
                        type="submit" 
                        value="Clear History" 
                        onClick={this.props.clearHistory} 
                        
                    />
                </div>
                
            </React.Fragment>
            
        )
    }
}

export default History
