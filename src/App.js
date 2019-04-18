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
        }}
        style={{position:'absolute',top:'50%',left:'50%'}}
        >
          显示
        </button>
        <Drawer 
        visible={this.state.isShow} 
        direction='left'
        onClose={this.onClose}
        title='123123123123'
        maskClosable={true}
        height='230'
        mask={true}
        zIndex='999'
        width='230'
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
