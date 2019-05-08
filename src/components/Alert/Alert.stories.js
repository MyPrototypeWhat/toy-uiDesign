import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert } from './view/alert';

storiesOf('Button', module)
  .add('with text', () => (
    <Alert closed={true} title='123' text='123112312312323123123' closeTrans={true} />  
  ));