(this.webpackJsonpdemoapp=this.webpackJsonpdemoapp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(14),n(4)),i=n(5),l=n(8),u=n(6),h=n(1),m=n(7),d=(n(15),n(16),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"text",placeholder:t,onChange:n})}),f=(n(17),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:e.monster.name,src:"https://robohash.org/".concat(e.monster.name,"?size=180x180")}),r.a.createElement("h2",null," ",e.monster.name," "),r.a.createElement("p",null," ",e.monster.email," "))}),p=(n(18),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(f,{monster:e})})))}),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){console.info("what is this",Object(h.a)(e)),e.setState({searchField:t.target.value})},e.changeText=function(){e.setState({title:"changed titile"})},e.state={monsters:[],filtered:[],searchField:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t,filtered:t})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){var e=this.state,t=(e.monsters,e.searchField),n=this.state.monsters.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Monsters Mania "),r.a.createElement("br",null),r.a.createElement(d,{placeholder:"Search Monster",handleChange:this.handleChange}),r.a.createElement(p,{monsters:n}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.407dfbbd.chunk.js.map