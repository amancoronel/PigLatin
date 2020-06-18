(this.webpackJsonpreactjs_pig_latin=this.webpackJsonpreactjs_pig_latin||[]).push([[0],{20:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),s=a.n(l),i=a(6),o=a(7),c=a(9),u=a(8),m=a(12),p=a(1),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar sticky-top mr-auto"},r.a.createElement("label",{className:"navbar-brand my-2 my-lg-0"}," Pig Latin Translator "),r.a.createElement("div",{className:"form-inline"},r.a.createElement(m.b,{className:"nav-link",to:"/"},"Translation Form"),r.a.createElement(m.b,{className:"nav-link",to:"/history"},"History"))))}}]),a}(n.Component),d=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-group",style:{paddingTop:"20px"}},r.a.createElement("textarea",{className:"form-control col-sm-6",rows:"10",onChange:this.props.handleChange,value:this.props.originalText,placeholder:"Add text here"}),r.a.createElement("textarea",{className:"form-control col-sm-6",rows:"10",value:this.props.translatedText,readOnly:!0})),r.a.createElement("div",{className:"input-group",style:{padding:"20px 0"}},r.a.createElement("input",{className:"btn btn-outline-success",type:"submit",value:"Translate",onClick:this.props.translate})))}}]),a}(n.Component),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.list;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group",style:{paddingTop:"20px"}},r.a.createElement("h1",null," History "),r.a.createElement("table",{className:"table table-*-responsive table-hover"},r.a.createElement("thead",null,r.a.createElement("th",null,"English"),r.a.createElement("th",null,"Pig Latin")),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.en),r.a.createElement("td",null,e.pl))}))))),r.a.createElement("div",{className:"form-group",style:{padding:"20px 0"}},r.a.createElement("input",{className:"btn btn-outline-primary",type:"submit",value:"Clear History",onClick:this.props.clearHistory})))}}]),a}(n.Component),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={originalText:"",translatedText:"",history:[]},e.clearHistory=function(){localStorage.clear("translation_history"),e.setState({history:[]})},e.handleChange=function(t){e.setState({originalText:t.target.value,translatedText:""})},e.translate=function(t){var a=["a","e","i","o","u"],n=e.state.originalText,r="",l=e.state.history,s=n.split(" ");n&&1!==n.length&&(n.match(/^[A-Za-z]+$/)?(s.forEach((function(t){for(var n=0;n<t.length;n++){if(a.indexOf(t[n].toLowerCase())>=0){t=e.processText(t,n);break}if(n===t.length-1){t=e.processText(t,n);break}}r+="".concat(t," ")})),l.push({id:l.length+1,en:n,pl:r}),e.setState({translatedText:r,history:l}),localStorage.setItem("translation_history",JSON.stringify(e.state.history))):e.setState({translatedText:n}))},e.processText=function(e,t){for(var a=0;a<t;a++)e=e.substr(1)+e.substr(0,1);return e+=t>0?"ay":"yay"},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("translation_history");e&&this.setState({history:JSON.parse(e)})}},{key:"render",value:function(){var e=this.state.history;return r.a.createElement("div",{className:"container"},r.a.createElement(m.a,null,r.a.createElement(h,null),r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(d,{handleChange:this.handleChange,translate:this.translate,originalText:this.state.originalText,translatedText:this.state.translatedText})),r.a.createElement(p.a,{path:"/history"},r.a.createElement(y,{list:e,clearHistory:this.clearHistory}))))}}]),a}(n.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e4504e62.chunk.js.map