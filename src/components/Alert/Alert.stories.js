import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert } from './view/alert';
import { withKnobs, text} from '@storybook/addon-knobs';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('Alert', () => (
    <Alert closed={true} title={text('标题','title')} text={text('内容','123123')} closeTrans={true} />  
  ));