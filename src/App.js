import { render, Component } from 'react';
import './App.css';

class App extends Component {
  
  func = ()  => {
    return 'pratik'
  };
  render() {
    const name = 'Patrick Bingewar'
    const loading = 'true'
    return (  
      <div className="App">
        {loading ? <h4>loading...</h4> : <h1>Hello { name.toUpperCase() } and { this.func() }</h1>}
      </div>
    );

  }

  
}

export default App;
