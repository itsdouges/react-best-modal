import * as React from 'react';
import { storiesOf } from '@storybook/react';
import BestModal from '../src';
import Toggler from './Toggler';

storiesOf('BestModal', module).add('inputs', () => (
  <Toggler>
    {({ show, toggle }) =>
      show && (
        <BestModal appRoot={document.getElementById('root') as HTMLElement} onRequestClose={toggle}>
          <button onClick={toggle}>close modal</button>
          <input />
          <input />
          <input />
          <button>submit</button>
        </BestModal>
      )
    }
  </Toggler>
));
