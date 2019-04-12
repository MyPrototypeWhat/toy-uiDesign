import React, { Component,Fragment } from 'react';
import { Alert } from './components/Alert';
import {ScrollBar} from './components/ScrollBar';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Alert closed={true} title='123' text='123112312312323123123' closeTrans={true} />  
        <ScrollBar style={{height:'400px'}}>
            <div style={{height:'2000px'}}>
              111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            </div>
        </ScrollBar>
      </Fragment>
    );
  }
}

export default App;
