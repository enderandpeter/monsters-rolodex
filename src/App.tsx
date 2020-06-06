import React, {ChangeEvent, Component} from 'react';
import { CardList} from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";

import './App.css';

export interface AppState {
  monsters: Monster[];
  searchField: string;
}

export interface Monster {
  name: string;
  id: number;
  email?: string;
}

class App extends Component<{}, AppState>{
  constructor(props: {}) {
    super(props);
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 1
        },
        {
          name: 'Dragula',
          id: 2
        },
        {
          name: 'Rob Zombie',
          id: 3
        }
      ],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({...this.state, monsters: users}))
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({searchField: e.target.value});
  }
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
  ));
    return (
        <div className={"App"}>
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder={'search monsters'} handleChange={this.handleChange} />
          <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

export default App;
