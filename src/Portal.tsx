import * as React from 'react';
import { createPortal } from 'react-dom';

export interface Props {
  children: React.ReactNode;
}

export default class Portal extends React.Component<Props> {
  render() {
    return createPortal(this.props.children, document.body);
  }
}
