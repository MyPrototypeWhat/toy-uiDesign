import React, { Component,Fragment } from 'react';
import { Tree } from './components/Tree';
// import imgUrl from './images/company.png';
// 引入图片 import 或者require
import './style/index.less';

class App extends Component {
  state={
    // data:{label: 'root'},
    data: [
      {
        id: '1',
        label: 'node1',
        expand: true,
        isChecked: false,
        icon: '',
        children: [
          {
            id: '1-1',
            label: 'node1-1',
            children: [
              {
                id: '1-3',
                label: 'node2'
              }
            ]
          }
        ]}, 
      {
        id: '2',
        label: 'node2'
      }
    ]
  }

  render() {
    let isNeedIcon = true;
    
    return (
      <Fragment>
        <Tree 
        data={this.state.data}
        isNeedIcon={isNeedIcon}></Tree>
      </Fragment>
    );
  }
}

export default App;
