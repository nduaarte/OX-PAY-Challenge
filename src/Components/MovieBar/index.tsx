import React, { useState } from 'react';

import popcorn from '../../assets/images/popcorn.png';
import {
  Container,
  TitleWrapper,
  InfoWrapper,
  InfoSubWrapper,
  PopImage,
  Title,
  Genre,
  Duration,
  ClockIcon,
  CheckedIcon,
  UncheckedIcon,
  CheckBox
} from './styles';

interface MovieBarProps {
  title: string;
  genres: Array<string>;
  duration: number;
}

const MovieBar: React.FC<MovieBarProps> = ({ title, genres, duration }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckBox() {
    setIsChecked(!isChecked);
  }

  return (
    <Container>
      <TitleWrapper>
        <PopImage src={popcorn} />
        <Title>{title}</Title>
      </TitleWrapper>

      <InfoWrapper>
        <InfoSubWrapper>
          {genres.map(item => <Genre>{item}</Genre>)}
        </InfoSubWrapper>

        <InfoSubWrapper>
          <ClockIcon />
          <Duration>{duration}min</Duration>
        </InfoSubWrapper>

        <CheckBox onClick={handleCheckBox}>
          {isChecked ? <CheckedIcon /> : <UncheckedIcon />}
        </CheckBox>
      </InfoWrapper>
    </Container>
  );
}

export default MovieBar;