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
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.4);
`;

const LightBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

storiesOf('SimpleModal', module).add('lightbox', () => (
  <Toggler>
    {({ show, toggle }) =>
      show && (
        <SimpleModal
          appRoot={document.getElementById('root') as HTMLElement}
          onRequestClose={toggle}
        >
          <LightBox onClick={toggle} />
          <FixedContainer>
            <button onClick={toggle}>close modal</button>
          </FixedContainer>
        </SimpleModal>
      )
    }
  </Toggler>
));
