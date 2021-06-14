import React from 'react';

import { Container, Wrapper, NumberValue } from './styles';

interface CounterListProps {
  value: number;
}

const CounterList: React.FC<CounterListProps> = ({ value }) => {


  return(
    <Container>
      <Wrapper>
        <NumberValue>{'<<'}</NumberValue>
      </Wrapper>
      <Wrapper>
        <NumberValue>{value - 1}</NumberValue>
      </Wrapper>
      <Wrapper>
        <NumberValue>{value}</NumberValue>
      </Wrapper>
      <Wrapper>
        <NumberValue>{value + 1}</NumberValue>
      </Wrapper>
      <Wrapper>
        <NumberValue>{'>>'}</NumberValue>
      </Wrapper>
    </Container>
  );
}

export default CounterList;