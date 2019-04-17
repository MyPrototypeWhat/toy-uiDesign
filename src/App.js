import React, { Component,Fragment } from 'react';
import { Drawer } from './components/Drawer';
import './style/index.less';
class App extends Component {
  state={
    isShow:false
  }
  onClose=()=>{
    this.setState({
      isShow:false
    });
  }
  render() {
    return (
      <Fragment>
        <button onClick={()=>{
          this.setState({
            isShow:true
          });
        }}>
          显示
        </button>
        <Drawer 
        visible={this.state.isShow} 
        direction='bottom'
        onClose={this.onClose}
        title='123123123123'
        maskClosable={true}
        height='230'
        mask={false}
        >
          <p>123123</p>
          <p>123123</p>
          <p>123123</p>
        </Drawer>
      </Fragment>
    );
  }
}

export default App;
