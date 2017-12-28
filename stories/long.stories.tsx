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
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.4);
  overflow: auto;
`;

const InnerContent = styled.div`
  margin: 100px 0;
  text-align: center;
  height: 1000px;
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

storiesOf('SimpleModal', module).add('long content', () => (
  <App>
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
              <InnerContent>
                <button onClick={toggle}>close modal</button>
                scroll down
              </InnerContent>
            </FixedContainer>
          </SimpleModal>
        )
      }
    </Toggler>
  </App>
));
