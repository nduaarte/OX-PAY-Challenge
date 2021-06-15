import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import useAPI from '../../services/useAPI';
import MovieBar from '../../Components/MovieBar';

import { Container, Title, StyledReactPaginate, PreviousIcon, NextIcon } from './styles';

const MovieList: React.FC = () => {
  const movies = useAPI();
  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 20;
  const pagesVisited = pageNumber * moviesPerPage;

  const displayMovies = movies.slice(pagesVisited, pagesVisited + moviesPerPage).map(movie =>
    <MovieBar movie={movie} />
  );


  const pageCount = Math.ceil(movies.length / moviesPerPage);
  const changePage = (props: { selected: React.SetStateAction<number> }) => {
    setPageNumber(props.selected);
  };

  return (
    <Container>
      <Title>Filmes</Title>

      {displayMovies}

      <StyledReactPaginate>
        <ReactPaginate
          previousLabel={<PreviousIcon />}
          nextLabel={<NextIcon />}
          pageCount={pageCount}
          onPageChange={changePage}
          pageRangeDisplayed={20}
          marginPagesDisplayed={10}
          containerClassName='pagination'
          activeClassName='active'
          breakClassName='break-me'
          pageClassName='item'
        />
      </StyledReactPaginate>
    </Container>
  );
}

export default MovieList;