import React  from 'react';
import { storiesOf } from '@storybook/react';
import { ScrollBar } from './view/scrollBar';
// import { StateDecorator, Store } from "@sambego/storybook-state";
// var data=new Store({
//   scrollY:true,
//   scrollX:true
// });const label = 'Colors';

storiesOf('ScrollBar', module)
  // .addDecorator(StateDecorator(data))
  .add('ScrollBar', () => (
    <ScrollBar style={{height:'400px',width:'200px'}} scrollY={true} scrollX={true}>
    {/* 只能用唯一子元素 */}
    <div style={{height:'5000px',width:'1000px'}}>
      123123123123123123
    </div>
  </ScrollBar>
  ));