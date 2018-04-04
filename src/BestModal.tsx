import * as React from 'react';
import Portal from './Portal';
import FocusLock from 'react-focus-lock';

export interface Props extends React.AllHTMLAttributes<any> {
  children: React.ReactNode;
  onRequestClose: (e: KeyboardEvent) => void;
  appRoot: Element;
  disableFocusLock?: boolean;
  // Allow through any properties that weren't picked up
  [x: string]: any;
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

    // Something inside <FocusLock /> is setting activeElement.
    // This overrides that behaviour.
    setTimeout(() => this.previousFocusedElement.focus(), 0);
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
          <FocusLock autoFocus={!disableFocusLock}>{children}</FocusLock>
        </div>
      </Portal>
    );
  }
}
