import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import api from '../../services/api';
import MovieBar from '../../Components/MovieBar';

import { Container, Title } from './styles';

interface MoviesProps {
  actors: string;
  director: string;
  genres: Array<string>
  id: number;
  plot: string;
  posterUrl: string;
  runtime: number;
  title: string;
  year: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 10;
  const pagesVisited = pageNumber * moviesPerPage;

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await api.get('movies.json');

      setMovies(data.movies);
    }

    fetchMovies();
  }, []);

  const displayMovies = (
    movies.slice(pagesVisited, pagesVisited + moviesPerPage).map(movie =>
      <MovieBar
        title={movie.title}
        genres={movie.genres}
        duration={movie.runtime}
      />
    )
  );

  const pageCount = Math.ceil(movies.length / moviesPerPage);
  const changePage = (props: { selected: React.SetStateAction<number>; }) => {
    setPageNumber(props.selected);
  };

  return (
    <Container>
      <Title>Filmes</Title>
      {displayMovies}
      <ReactPaginate
        previousLabel='<<'
        nextLabel='>>'
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={10}
        marginPagesDisplayed={5}
      />
    </Container>
  );
}

export default MovieList;