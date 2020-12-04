import React,{Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchField from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField:""
    }
  }
  componentDidMount() {
    (async()=>{
      const fetchResult = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await fetchResult.json();
        this.setState({monsters:response});  
    })(); 
  }
  handleChange = (evet) =>{
    const {name,value} = evet.target
    this.setState({[name]:value});
  }
  render() {
    const filteredMonster = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return(
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchField search={this.state.searchField} handleChange={this.handleChange}/>
        {filteredMonster.length ? <CardList monsters={filteredMonster}/> : <h1>No Monster..........</h1>}
      </div>
    )
  }
}


export default App;
