import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Form from './components/Form'
import History from './components/History'

export class App extends Component {
  state = {
    originalText : "",
    translatedText : "",
    history : []
  }

  componentDidMount() {
    const initialList = localStorage.getItem("translation_history");
    if(initialList) this.setState({history : JSON.parse(initialList)});
  }

  clearHistory = () => {
    localStorage.clear("translation_history");
    this.setState({history : []});
  }

  handleChange = (e) => {
    this.setState({originalText : e.target.value, translatedText: ''});
  }

  translate = (e) => {
    const vowelList = ["a", "e", "i", "o", "u"];
    let text = this.state.originalText;
    let translatedText = "";
    let historyList = this.state.history;
    let arrayText = text.split(" ");

    

    if(!text || text.length === 1) return
    if(!text.match(/^[a-zA-Z ]*$/)) {
      this.setState({translatedText: text});
      return;
    }
  
    arrayText.forEach((text) => {
      for(let i = 0; i < text.length; i++) {
        if(vowelList.indexOf(text[i].toLowerCase()) >= 0) {
          text = this.processText(text, i);
          break;
        }

        if(i === text.length - 1) {
          text = this.processText(text, i);
          break;
        }
      }
      translatedText += `${text} `;
    })

    historyList.push({id: historyList.length+1, en: text, pl: translatedText});

    this.setState({
      translatedText : translatedText,
      history : historyList
    });
    localStorage.setItem("translation_history", JSON.stringify(this.state.history));
  }

  processText = (text,vpos) => {
    for(let i = 0; i < vpos; i++) {
      text = text.substr(1) + text.substr(0, 1);
    }

    text += (vpos > 0) ? "ay" : "yay";
    return text;
  }

  render() {
    const historyList = this.state.history;
    return ( 
      <div className="container">
        <Router>
          <Header />
          <Route exact path="/">
            <Form 
              handleChange={this.handleChange} 
              translate={this.translate}
              originalText={this.state.originalText} 
              translatedText={this.state.translatedText} 
            />
          </Route>
          <Route path="/history">
            <History list={historyList} clearHistory={this.clearHistory} />
          </Route>
        </Router> 
      </div>
      
    )
  }
}
export default App
