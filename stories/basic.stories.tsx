import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleModal from '../src';
import Toggler from './Toggler';

storiesOf('SimpleModal', module).add('basic', () => (
  <Toggler>
    {({ show, toggle }) =>
      show && (
        <SimpleModal
          appRoot={document.getElementById('root') as HTMLElement}
          onRequestClose={toggle}
        >
          <button onClick={toggle}>close modal</button>
        </SimpleModal>
      )
    }
  </Toggler>
));
