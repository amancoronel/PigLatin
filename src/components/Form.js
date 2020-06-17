import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                <textarea className="form-control" rows="5" onChange={this.props.handleChange} value={this.props.originalText} />
                <textarea className="form-control" rows="5" value={this.props.translatedText} readOnly/>
                <div>
                <input type="submit" value="Translate" onClick={this.props.translate}/>
                </div>
            </div>
        )
    }
}

export default Form

