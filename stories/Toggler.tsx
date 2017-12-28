import * as React from 'react';

interface State {
  show: boolean;
}

interface ChildrenProps {
  show: boolean;
  toggle: () => void;
}

interface Props {
  children: (props: ChildrenProps) => React.ReactNode;
}

export default class Toggler extends React.Component<Props, State> {
  state = {
    show: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };

  render() {
    return (
      <div id="root">
        <button onClick={this.toggle}>show modal</button>

        {this.props.children({ show: this.state.show, toggle: this.toggle })}
      </div>
    );
  }
}
