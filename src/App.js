import React, { Component,Fragment } from 'react';
import { Tree } from './components/Tree';
import './style/index.less';
class App extends Component {
  state={
    data:{label: 'root'}
  }

  render() {
    return (
      <Fragment>
        <Tree data={this.state.data}></Tree>
      </Fragment>
    );
  }
}

export default App;
