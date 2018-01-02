import * as React from 'react';
import { storiesOf } from '@storybook/react';
import BestModal from '../src';
import Toggler from './Toggler';

storiesOf('Behaviour', module)
  .add('adds modal to body with portal', () => (
    <Toggler>
      {({ show, toggle }) =>
        show && (
          <BestModal
            appRoot={document.getElementById('root') as HTMLElement}
            onRequestClose={toggle}
          >
            <button onClick={toggle}>close modal</button>
          </BestModal>
        )
      }
    </Toggler>
  ))
  .add('locks focus within modal', () => (
    <Toggler>
      {({ show, toggle }) =>
        show && (
          <BestModal
            appRoot={document.getElementById('root') as HTMLElement}
            onRequestClose={toggle}
          >
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
