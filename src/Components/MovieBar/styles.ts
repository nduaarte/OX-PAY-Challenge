import styled, { css } from 'styled-components';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { RiTimerLine } from 'react-icons/ri';


export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 30px;
  border-radius: 15px;
  margin-top: 15px;

  align-items: center;
  justify-content: space-between;
  background-color: var(--lightGrey);
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

export const PopImage = styled.img`
  object-fit: center;
  width: 45px;
  height: 45px;
  margin-right: 8px;
`;

export const Title = styled.section`
  font-size: 28px;
  font-weight: bold;
  color: var(--darkerGrey);

  :hover {
    cursor: pointer;
  }
`;

export const Genre = styled.span`
  font-size: 17px;
  line-height: 25px;
  font-weight: bold;
  color: var(--darkGrey);
`;

export const Duration = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: var(--grey);
`;

const icon = css`
  width: 25px;
  height: 25px;
  color: var(--primary);

  :hover {
    cursor: pointer;
  }
`;

export const ClockIcon = styled(RiTimerLine)`
  width: 23px; 
  height: 23px;
  color: var(--grey);
  margin-right: 3px;
`;

export const CheckBox = styled.button``;

export const CheckedIcon = styled(ImCheckboxChecked)`
  ${icon};
`;

export const UncheckedIcon = styled(ImCheckboxUnchecked)`
  ${icon};
`;

