import React  from 'react';
import { storiesOf } from '@storybook/react';
// import Tree
import { StateDecorator, Store } from "@sambego/storybook-state";
import { Tree } from './view/tree';
var data=new Store({
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
});
storiesOf('Tree', module)
  .addDecorator(StateDecorator(data))
  .add('Tree', () => (
    <Tree 
        data={data.get('data')}
        isNeedIcon={true}
        >
    </Tree>
  ));