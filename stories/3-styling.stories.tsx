import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import BestModal from '../src';
import Toggler from './Toggler';
import BodyClassName from './BodyClassName';

const FixedBestModal = styled(BestModal)`
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

const App = styled.div`
  background: #2986be;
  background-image: url(//p6.zdassets.com/hc/theme_assets/138842/200037786//pattern_transparent.png),
    linear-gradient(-150deg, #00c1b6 0%, #136eb5 97%);
  background-size: 380px, contain;
  height: 1000px;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DisableBodyScroll = styled(BodyClassName)`
  overflow: hidden;
  position: relative;
`;

storiesOf('Styling', module)
  .add('its all up to you, heres an example fixed', () => (
    <Toggler>
      {({ show, toggle }) =>
        show && (
          <FixedBestModal
            appRoot={document.getElementById('root') as HTMLElement}
            onRequestClose={toggle}
          >
            <button onClick={toggle}>close modal</button>
            <input />
          </FixedBestModal>
        )
      }
    </Toggler>
  ))
  .add('and with a lightbox (click surrounding area to close)', () => (
    <Toggler>
      {({ show, toggle }) =>
        show && (
          <>
            <LightBox onClick={toggle} />
            <FixedBestModal
              appRoot={document.getElementById('root') as HTMLElement}
              onRequestClose={toggle}
            >
              <button onClick={toggle}>close modal</button>
              <input />
            </FixedBestModal>
          </>
        )
      }
    </Toggler>
  ))
  .add('and finally also disabling body from scrolling behind', () => (
    <App>
      <Toggler>
        {({ show, toggle }) =>
          show && (
            <>
              <DisableBodyScroll />
              <LightBox onClick={toggle} />
              <FixedBestModal
                appRoot={document.getElementById('root') as HTMLElement}
                onRequestClose={toggle}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <button onClick={toggle}>close modal</button>
                <input />
              </FixedBestModal>
            </>
          )
        }
      </Toggler>
    </App>
  ));
