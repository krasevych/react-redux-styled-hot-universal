import React, {
  PropTypes,
  PureComponent
} from 'react';
import 'app/styles/global';
import Wrapper from './Wrapper';

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        {children}
      </Wrapper>
    );
  }
}
