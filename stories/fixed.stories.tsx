import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import BestModal from '../src';
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

storiesOf('BestModal', module).add('fixed', () => (
  <Toggler>
    {({ show, toggle }) =>
      show && (
        <BestModal appRoot={document.getElementById('root') as HTMLElement} onRequestClose={toggle}>
          <FixedContainer>
            <button onClick={toggle}>close modal</button>
          </FixedContainer>
        </BestModal>
      )
    }
  </Toggler>
));
