import * as React from 'react';
import Portal from './Portal';
import FocusLock from 'react-focus-lock';

export interface Props {
  children: React.ReactNode;
  onRequestClose: (e: KeyboardEvent) => void;
  appRoot: Element;
  disableFocusLock?: boolean;
}

const ESC_KEY = 27;

export default class BestModal extends React.Component<Props> {
  previousFocusedElement: HTMLElement;

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
    this.props.appRoot.setAttribute('aria-hidden', 'true');
    this.previousFocusedElement = document.activeElement as HTMLElement;
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
    this.props.appRoot.removeAttribute('aria-hidden');

    if (this.previousFocusedElement) {
      // Something inside <FocusLock /> is setting activeElement.
      // This overrides that behaviour.
      setTimeout(() => {
        if (this.previousFocusedElement) {
          this.previousFocusedElement.focus();
        }
      }, 0);
    }
  }

  onKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === ESC_KEY) {
      this.props.onRequestClose(e);
    }
  };

  render() {
    const { children, onRequestClose, appRoot, disableFocusLock, ...props } = this.props;

    return (
      <Portal>
        <div aria-modal="true" role="dialog" {...props}>
          <FocusLock disabled={disableFocusLock}>{children}</FocusLock>
        </div>
      </Portal>
    );
  }
}
