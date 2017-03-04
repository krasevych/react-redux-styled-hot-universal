import React, { PureComponent } from 'react';
import Container from 'app/components/Container';
import Wrapper from './Wrapper';

export default class NotFound extends PureComponent {
  render() {
    return (
      <Container>
        <Wrapper>
          <span>Not Found</span>
        </Wrapper>
      </Container>
    );
  }
}
