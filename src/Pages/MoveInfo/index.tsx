import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/MovieInfoReducer';

import {
  Container,
  Title,
  MovieWrapper,
  Banner,
  InfoWrapper,
  MovieTitle,
  ClockIcon,
  YearIcon,
  Row,
  TextIcon,
  Genre,
  Participants,
  Description
} from './styles';

const MovieInfo: React.FC = () => {
  const movie = useSelector((state: RootState) => state.MovieInfoReducer.movie);
  const { posterUrl, title, runtime, actors, director, plot, genres, year } = movie;

  return (
    <Container>
      <Title>Detalhes</Title>
      <MovieWrapper>
        <Banner src={posterUrl} alt={`banner do(a) ${title}`} />

        <InfoWrapper>
          <MovieTitle>
            {title}
          </MovieTitle>

          <Row>
            <ClockIcon />
            <TextIcon>{`${runtime}min`}</TextIcon>
            <YearIcon />
            <TextIcon>{year}</TextIcon>
          </Row>

          <Participants>
            {actors} <br />
            {`Dirigido por ${director}`}
          </Participants>

          <Row>
            {genres.map(item => <Genre>{item}</Genre>)}
          </Row>

          <Description>
            {plot}
          </Description>
        </InfoWrapper>
      </MovieWrapper>
    </Container>
  );
}

export default MovieInfo;