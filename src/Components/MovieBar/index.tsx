import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import popcorn from '../../assets/images/popcorn.png';
import {
  Container,
  TitleWrapper,
  InfoWrapper,
  InfoSubWrapper,
  MobileWrapper,
  PopImage,
  Title,
  Genre,
  Duration,
  ClockIcon,
  CheckedIcon,
  UncheckedIcon
} from './styles';

interface MovieBarProps {
  movie: {
    actors: string;
    director: string;
    genres: Array<string>;
    id: number;
    plot: string;
    posterUrl: string;
    runtime: number;
    title: string;
    year: string;
  }
}

const MovieBar: React.FC<MovieBarProps> = ({ movie }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { title, genres, runtime } = movie;
  const dispatch = useDispatch();
  const history = useHistory();

  function handleCheckBox() {
    setIsChecked(!isChecked);
  }

  function dispatchToNavigate(movie: object) {
    dispatch({ type: 'UPDATE_MOVIE', value: movie });
    history.push('/movieInfo');
  }

  return (
    <Container>
      <TitleWrapper>
        <PopImage src={popcorn} alt='popcorn-icon' />
        <Title onClick={() => dispatchToNavigate(movie)}>{title}</Title>
      </TitleWrapper>

      <InfoWrapper>
        <MobileWrapper>
          <InfoSubWrapper>
            {genres.map(item => <Genre>{item}</Genre>)}
          </InfoSubWrapper>

          <InfoSubWrapper>
            <ClockIcon />
            <Duration>{runtime}min</Duration>
          </InfoSubWrapper>
        </MobileWrapper>

        <button onClick={handleCheckBox}>
          {isChecked ? <CheckedIcon /> : <UncheckedIcon />}
        </button>
      </InfoWrapper>
    </Container>
  );
}

export default MovieBar;