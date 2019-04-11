import React, { Component,Fragment } from 'react';
import { Alert } from './components/Alert';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Alert closed={true} title='123' text='123112312312323123123' closeTrans={true}/>  
        <div>
          12312312312312312312312
        </div>
      </Fragment>
    );
  }
}

export default App;
