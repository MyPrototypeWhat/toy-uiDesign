// import React, { Component } from 'react';
// import { ScrollBar } from './components/ScrollBar';
// import React, { Component,Fragment } from 'react';
// import { Tree } from './components/Tree';
// // import imgUrl from './images/company.png';
// // 引入图片 import 或者require
// import './style/index.less';

// class App extends Component {
//   state={
//     // data:{label: 'root'},
//     data: [
//       {
//         id: '1',
//         label: 'node1',
//         expand: true,
//         isChecked: false,
//         icon: '',
//         children: [
//           {
//             id: '1-1',
//             label: 'node1-1',
//             children: [
//               {
//                 id: '1-3',
//                 label: 'node2'
//               }
//             ]
//           }
//         ]}, 
//       {
//         id: '2',
//         label: 'node2'
//       }
//     ]
//   }

//   render() {
//     let isNeedIcon = true;
    
//     return (
//       <ScrollBar style={{height:'400px',width:'200px'}} scrollY={true} scrollX={true}>
//         {/* 只能用唯一子元素 */}
//         <div style={{height:'5000px',width:'1000px'}}>
//           123123123123123123
//         </div>
//       </ScrollBar>
//       <Fragment>
//         <Tree 
//         data={this.state.data}
//         isNeedIcon={isNeedIcon}></Tree>
//       </Fragment>
//     );
//   }
// }
// // import React, { Component,Fragment } from 'react';
// // import { Alert } from './components/Alert';
// // class App extends Component {
// //   render() {
// //     return (
// //       <Fragment>
// //         <Alert closed={true} title='123' text='123112312312323123123' closeTrans={true} />  
// //       </Fragment>
// //     );
// //   }
// // }

// export default App;
