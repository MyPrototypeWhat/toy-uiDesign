import React, { Component } from 'react';
import { ScrollBar } from './components/ScrollBar';
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
      <ScrollBar style={{height:'400px',width:'200px'}} scrollY={true} scrollX={true}>
        {/* 只能用唯一子元素 */}
        <div style={{height:'5000px',width:'1000px'}}>
          123123123123123123
        </div>
      </ScrollBar>
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
// import React, { Component,Fragment } from 'react';
// import { Alert } from './components/Alert';
// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Alert closed={true} title='123' text='123112312312323123123' closeTrans={true} />  
//       </Fragment>
//     );
//   }
// }

export default App;
