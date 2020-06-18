import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="input-group" style={{paddingTop: "20px"}}>
                    <textarea 
                        className="form-control col-sm-6" 
                        rows="10" 
                        onChange={this.props.handleChange} 
                        value={this.props.originalText} 
                        placeholder="Add text here" 
                    />
                    <textarea 
                        className="form-control col-sm-6" 
                        rows="10" 
                        value={this.props.translatedText} 
                        readOnly
                    />
                </div>
                <div className="input-group" style={{padding: "20px 0"}}>
                    <input 
                        className="btn btn-outline-success"
                        type="submit" 
                        value="Translate" 
                        onClick={this.props.translate}
                    />
                </div>
            </React.Fragment>
            
        )
    }
}

export default Form

