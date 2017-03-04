import React, { PureComponent } from 'react';
import Container from 'app/components/Container';
import Wrapper from './Wrapper';

export default class Footer extends PureComponent {
  render() {
    const githubUrl = 'https://github.com/krasevych/english-school';

    return (
      <Wrapper>
        <Container>
          <span>Have questions? Contact with me for help on </span>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >Github</a>
        </Container>
      </Wrapper>
    );
  }
}
