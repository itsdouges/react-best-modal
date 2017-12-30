import * as React from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

export interface Props extends React.AllHTMLAttributes<any> {
  children: React.ReactNode;
  onRequestClose: (e: KeyboardEvent) => void;
  appRoot: Element;
  // Allow through any properties that weren't picked up
  [x: string]: any;
}

const ESC_KEY = 27;

export default class SimpleModal extends React.Component<Props> {
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
      this.props.onRequestClose(e);
    }
  };

  render() {
    const { children, onRequestClose, appRoot, ...props } = this.props;

    return createPortal(
      <FocusLock>
        <div aria-modal="true" role="dialog" {...props}>
          {this.props.children}
        </div>
      </FocusLock>,
      document.body
    );
  }
}
