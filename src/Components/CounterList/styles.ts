import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;

export const Wrapper = styled.button`
  width: 50px;
  height: 50px;

  margin: 0 10px;
  border: 2px solid var(--darkGrey);
  border-radius: 50%;
`;

export const NumberValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--darkGrey);
`;

