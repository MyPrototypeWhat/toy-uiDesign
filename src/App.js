import React, { Component } from 'react';
import { ScrollBar } from './components/ScrollBar';
class App extends Component {
  render() {
    return (
      <ScrollBar style={{height:'400px',width:'200px'}} scrollY={true} scrollX={true}>
        {/* 只能用唯一子元素 */}
        <div style={{height:'5000px',width:'1000px'}}>
          123123123123123123
        </div>
      </ScrollBar>
    );
  }
}

export default App;
