import styled, { css } from 'styled-components';
import { BiSkipPreviousCircle, BiSkipNextCircle } from 'react-icons/bi';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 35px;
`;

export const Title = styled.div`
  align-self: flex-start;
  font-size: 32px;
  font-weight: bold;
  color: var(--darkerGrey);
`;

export const StyledReactPaginate = styled.div`
  margin-top: 20px;
  width: 60%;

  .pagination {
    display: flex;
    justify-content: space-around;
    align-items: center;

    color: var(--darkGrey);
    font-size: 22px;
    padding: 10px;

    :hover {
      cursor: pointer;
    }
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 3px solid var(--darkGrey);
    color: var(--darkGrey);
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }

  .active {
    border-color: var(--primary);
    color: var(--primary);
  }
`;

const icon = css`
  margin-top: 5px;
  width: 38px;
  height: 38px;
  color: var(--darkGrey);

  :hover {
    color: var(--primary);
  }
`;


export const PreviousIcon = styled(BiSkipPreviousCircle)`
  ${icon};
`;

export const NextIcon = styled(BiSkipNextCircle)`
  ${icon};
`;

