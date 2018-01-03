import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import BestModal from '../src';
import Toggler from './Toggler';

type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited';

interface TransitionProps {
  state: TransitionState;
}

const opacityMap = {
  entering: 0,
  entered: 1,
  exiting: 0,
  exited: 0,
};

const FixedBestModalWithTransition = styled(BestModal)`
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
  transition: opacity 180ms;
  opacity: ${(props: TransitionProps) => opacityMap[props.state] || 0};
`;

storiesOf('Transitions', module).add(
  'supports react-transition-group no problem, heres a fadein/out',
  () => (
    <Toggler>
      {({ show, toggle }) => (
        <Transition in={show} timeout={180} mountOnEnter unmountOnExit>
          {(state: TransitionState) => (
            <FixedBestModalWithTransition
              state={state}
              onRequestClose={toggle}
              appRoot={document.querySelector('#root') || document.body}
            >
              <button onClick={toggle}>close</button>
              <input />
            </FixedBestModalWithTransition>
          )}
        </Transition>
      )}
    </Toggler>
  )
);
