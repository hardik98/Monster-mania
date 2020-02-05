import React, { Component } from 'react';
import './App.css';
import Searchbar from './component/search-bar/search-bar.component';

import CardList from './component/card-list/card-list.component'
 class AppComponent extends Component {  

  robot;
  constructor() {
     super();

     this.state = {
       monsters: [],
       filtered: [],
       searchField:  ''
     }

   }

   componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(user => this.setState({monsters: user, filtered: user}))
     .catch(err => console.log("error", err))
   }

   handleChange =(event) => {
     console.info('what is this', this);
       this.setState({searchField: event.target.value})
      // this.setState({searchField: evt});
   }

   changeText = () => {
      this.setState({title: 'changed titile'});
   }

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = this.state.monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="App">
        <h1> Monsters Mania </h1>
        <br/>  
         <Searchbar placeholder="Search Monster" handleChange={this.handleChange}/>
         <CardList monsters={filterdMonsters}/> 
      </div>
    ); 
    }
  
}
 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default AppComponent;
