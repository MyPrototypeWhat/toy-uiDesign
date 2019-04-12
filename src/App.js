import React, { Component } from 'react';
import { ScrollBar } from './components/ScrollBar';
class App extends Component {
  render() {
    return (
      <ScrollBar style={{height:'400px'}}>
        <div style={{height:'2000px'}}>
          123123123123123123
        </div>
      </ScrollBar>
    );
  }
}

export default App;
