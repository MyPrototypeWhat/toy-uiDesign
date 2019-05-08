import React  from 'react';
import { storiesOf } from '@storybook/react';
import {Drawer} from './view/drawer';
import { withKnobs, boolean} from '@storybook/addon-knobs';
// const direction = text('direction','left');
storiesOf('Drawer', module)
  .addDecorator(withKnobs)
  .add('Drawer', () => (
        <Drawer 
        visible={boolean('显示', true)} 
        direction='top'
        onClose={()=>{}}
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
  ));