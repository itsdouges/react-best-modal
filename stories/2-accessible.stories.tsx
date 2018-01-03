import * as React from 'react';
import { storiesOf } from '@storybook/react';
import BestModal from '../src';
import Toggler from './Toggler';

storiesOf('BEST Accessibility', module).add('make sure to use title and description', () => (
  <Toggler>
    {({ show, toggle }) =>
      show && (
        <BestModal
          appRoot={document.getElementById('root') as HTMLElement}
          onRequestClose={toggle}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <button onClick={toggle}>close modal</button>
          <h2 id="modal-title">Hello, World!</h2>
          <p id="modal-description">This is a modal, hello worlding!</p>
          <input />
        </BestModal>
      )
    }
  </Toggler>
));
