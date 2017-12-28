import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import SimpleModal from '../src';
import Toggler from './Toggler';

const FixedContainer = styled.div`
  position: fixed;
  top: 25%;
  right: 25%;
  left: 25%;
  bottom: 25%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

storiesOf('SimpleModal', module).add('more accessible', () => (
  <Toggler>
    {({ show, toggle }) =>
      show && (
        <SimpleModal
          appRoot={document.getElementById('root') as HTMLElement}
          onRequestClose={toggle}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <FixedContainer>
            <div>
              <button onClick={toggle}>close modal</button>
              <h2 id="modal-title">Hello, World!</h2>
              <p id="modal-description">This is a modal, hello worlding!</p>
            </div>
          </FixedContainer>
        </SimpleModal>
      )
    }
  </Toggler>
));
