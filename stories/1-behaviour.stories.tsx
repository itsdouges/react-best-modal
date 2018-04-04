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
            <input />
          </BestModal>
        )
      }
    </Toggler>
  ))
  .add('locks focus within modal (ensure you have something focusable inside the modal!)', () => (
    <Toggler>
      {({ show, toggle }) =>
        show && (
          <BestModal
            appRoot={document.getElementById('root') as HTMLElement}
            onRequestClose={toggle}
          >
            <input placeholder="put text in me" />
            <button onClick={toggle}>close modal</button>
            <a tabIndex={0} href="">
              result
            </a>
            <a tabIndex={0} href="">
              result
            </a>
            <a tabIndex={0} href="">
              result
            </a>
            <a tabIndex={0} href="">
              result
            </a>
          </BestModal>
        )
      }
    </Toggler>
  ));
