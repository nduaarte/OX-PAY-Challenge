import styled, { css } from 'styled-components';
import { BiSkipPreviousCircle, BiSkipNextCircle } from 'react-icons/bi';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 10px;

  @media (min-width: 950px) {
    padding: 20px 35px;
  }
`;

export const Title = styled.div`
  align-self: flex-start;
  font-size: 32px;
  font-weight: bold;
  color: var(--darkerGrey);
`;

export const StyledReactPaginate = styled.div`
  margin-top: 20px;
  width: 100%;

  .pagination {
    display: flex;
    justify-content: space-around;
    align-items: center;

    color: var(--darkGrey);
    font-size: 16px;

    :hover {
      cursor: pointer;
    }

    @media (min-width: 950px) {
      font-size: 22px;
      padding: 10px;
    }
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid var(--darkGrey);
    color: var(--darkGrey);
    border-radius: 50%;
    width: 25px;
    height: 25px;

    @media (min-width: 950px) {
      border: 3px solid var(--darkGrey);
      width: 35px;
      height: 35px;
    }
  }

  .active {
    border-color: var(--primary);
    color: var(--primary);
  }

  @media (min-width: 950px) {
    align-self: center;
    width: 60%;
    font-size: 22px;
    padding: 10px;
  }
`;

const icon = css`
  margin-top: 5px;
  width: 30px;
  height: 30px;
  color: var(--darkGrey);

  :hover {
    color: var(--primary);
  }

  @media (min-width: 950px) {
    width: 38px;
    height: 38px;
  }
`;


export const PreviousIcon = styled(BiSkipPreviousCircle)`
  ${icon};
`;

export const NextIcon = styled(BiSkipNextCircle)`
  ${icon};
`;

