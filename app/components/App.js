
import React, { Component } from 'react';
import Display from './Display';
import Switch from './Switch';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      back_default: null,
      front_default: null,
      isOn: false,
    }
  }

  componentDidMount() {
    console.log('did mount')
    axios.get('http://pokeapi.salestock.net/api/v2/pokemon/7')
      .then(res => this.setState({
        back_default: res.data.sprites.back_default,
        front_default: res.data.sprites.front_default,
      }))
  }

  handleClick() {
    this.setState(prevState => ({
      isOn: !prevState.isOn,
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Display
          back_default={this.state.back_default}
          front_default={this.state.front_default}
        />
        <Switch isOn={this.state.isOn}/>
        <div>
          <button onClick={() => this.handleClick()}>Switch</button>
        </div>
      </div>
    );
  }
}

export default App;
