import styled, { css } from 'styled-components';
import { RiTimerLine } from 'react-icons/ri';
import { BiCameraMovie } from 'react-icons/bi';

export const Container = styled.div`
  padding: 20px;
  height: 100vh;
  background-color: var(--lightGrey);

  @media (min-width: 850px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 30px;
    
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  color: var(--darkerGrey);
  margin-bottom: 10px;
`;

export const MovieWrapper = styled.div`
  @media (min-width: 850px) {
    background-color: #ffffff;
    display: flex;
    padding: 30px;
    border-radius: 20px;

    -webkit-box-shadow: 5px 5px 8px -5px rgba(0,0,0,0.22); 
    box-shadow: 5px 5px 8px -5px rgba(0,0,0,0.22);
  }
`;

export const Banner = styled.img`
  margin-top: 15px;
  width: 85%;
  max-width: 350px;
  border-radius: 8px;

  -webkit-box-shadow: 5px 5px 8px -5px rgba(0,0,0,0.22); 
  box-shadow: 5px 5px 8px -5px rgba(0,0,0,0.22);
`;

export const InfoWrapper = styled.div`
  @media (min-width: 850px) {
    margin: 15px;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 28px;
  margin-top: 5px;
  color: var(--darkerGrey);

  @media (min-width: 850px) {
    font-size: 36px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const icon = css`
  width: 22px;
  height: 22px;
  color: var(--primary);
  margin-right: 2px;

  @media (min-width: 850px) {
    width: 25px;
    height: 25px;
  }
`;

export const ClockIcon = styled(RiTimerLine)`
  ${icon};
`;

export const YearIcon = styled(BiCameraMovie)`
  ${icon};
  margin-left: 10px;

  @media (min-width: 850px) {
    margin-left: 20px;
  }
`;

export const TextIcon = styled.span`
  color: var(--darkGrey);
  font-weight: bold;
  font-size: 15px;

  @media (min-width: 850px) {
    font-size: 18px;
  }
`;

export const Genre = styled.section`
  line-height: 25px;
  margin-right: 10px;
  color: var(--primary);
  font-weight: bold;

  @media (min-width: 850px) {

  }
`;

export const Participants = styled.section`
  margin-top: 10px;
  line-height: 25px;

  color: var(--secondary);
  font-weight: bold;

  @media (min-width: 850px) {
    margin-top: 20px;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  padding-left: 5px;
  font-size: 18px;
  

  color: var(--grey);
  border-left: 2px solid var(--grey);

  @media (min-width: 850px) {
    font-size: 20px;
    max-width: 450px;
  }
`;
