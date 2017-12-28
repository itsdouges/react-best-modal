import * as React from 'react';

interface Props {
  className?: string;
}

export default class BodyClassName extends React.Component<Props> {
  componentDidMount() {
    if (this.props.className) {
      document.body.classList.add(...this.props.className.split(' '));
    }
  }

  componentWillUnmount() {
    if (this.props.className) {
      document.body.classList.remove(...this.props.className.split(' '));
    }
  }

  render() {
    return null;
  }
}
