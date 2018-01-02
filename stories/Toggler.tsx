import * as React from 'react';
import { injectGlobal } from 'styled-components';

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

injectGlobal`
  button {
    padding: 10px;
    margin: 10px;
    border: 2px solid black;
    text-transform: uppercase;

    &:focus {
      border: 2px solid blue;
      outline: 2px solid blue;
      outline-offset: 2px;
    }
  }
`;

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
