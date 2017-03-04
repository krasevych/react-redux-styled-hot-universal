import React, { PureComponent } from 'react';
import Container from 'app/components/Container';
import Wrapper from './Wrapper';

export default class Home extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Container>
          <h1>Home</h1>
        </Container>
      </Wrapper>
    );
  }
}
