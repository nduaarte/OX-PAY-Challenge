import styled, { css } from 'styled-components';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { RiTimerLine } from 'react-icons/ri';


export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  margin-top: 15px;

  align-items: center;
  justify-content: space-between;
  background-color: var(--lightGrey);

  -webkit-box-shadow: 5px 5px 8px -5px rgba(0,0,0,0.22); 
  box-shadow: 5px 5px 8px -5px rgba(0,0,0,0.22);

  @media (min-width: 850px) {
    padding: 20px 30px;
  }
`;

export const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoSubWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 10px;

  @media (min-width: 850px) {
    flex-direction: row;
    flex: 1;
  }
`;

export const PopImage = styled.img`
  object-fit: center;
  width: 40px;
  height: 40px;
  margin-right: 8px;

  display: none;

  @media (min-width: 850px) {
    display: inline;
  }
`;

export const Title = styled.section`
  font-size: 16px;
  font-weight: bold;
  color: var(--darkerGrey);

  :hover {
    cursor: pointer;
  }

  @media (min-width: 850px) {
    font-size: 23px;
  }
`;

export const Genre = styled.span`
  font-size: 12px;
  line-height: 25px;
  font-weight: bold;
  color: var(--darkGrey);
  margin-right: 5px;

  @media (min-width: 850px) {
    font-size: 16px;
    margin-right: 15px;
  }
`;

export const Duration = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: var(--grey);

  @media (min-width: 850px) {
    font-size: 15px;
  }
`;

const icon = css`
  width: 18px;
  height: 18px;
  color: var(--primary);

  :hover {
    cursor: pointer;
  }

  @media (min-width: 850px) {
    width: 25px;
    height: 25px;
  }
`;

export const ClockIcon = styled(RiTimerLine)`
  width: 16px; 
  height: 16px;
  color: var(--grey);
  margin-right: 3px;

  @media (min-width: 850px) {
    width: 23px;
    height: 23px;
  }
`;

export const CheckedIcon = styled(ImCheckboxChecked)`
  ${icon};
`;

export const UncheckedIcon = styled(ImCheckboxUnchecked)`
  ${icon};
`;