import * as React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import FocusTrap from 'focus-trap-react';
import BodyClassName from './BodyClassName';

const DisableBodyScroll = styled(BodyClassName)`
  overflow: hidden;
  position: relative;
`;

interface Props extends React.AllHTMLAttributes<any> {
  children: React.ReactNode;
  onRequestClose: () => void;
  appRoot: Element;
  // Allow through any properties that weren't picked up
  [x: string]: any;
}

const ESC_KEY = 27;

export default class ModeAll extends React.Component<Props> {
  previousFocusedElement: HTMLElement;

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
    this.props.appRoot.setAttribute('aria-hidden', 'true');
    this.previousFocusedElement = document.activeElement as HTMLElement;
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
    this.props.appRoot.removeAttribute('aria-hidden');
    this.previousFocusedElement.focus();
  }

  onKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === ESC_KEY) {
      if (e.defaultPrevented) {
        return;
      }
      e.stopPropagation();
      this.props.onRequestClose();
    }
  };

  render() {
    const { children, onRequestClose, appRoot, ...props } = this.props;

    return createPortal(
      <FocusTrap aria-modal="true" role="dialog" {...props}>
        {this.props.children}
        <DisableBodyScroll />
      </FocusTrap>,
      document.body
    );
  }
}
