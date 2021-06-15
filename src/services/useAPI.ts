import { useState, useEffect } from 'react';
import axios from 'axios';

interface MoviesProps {
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

export default function useAPI() {
  const URL = 'https://gist.githubusercontent.com/Ispx/3b47ee1d8207ada24323d3c9d493d80f/raw/bde4c4b9290492e370cea7ee2462f4e2393db03b/movies.json';
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  
  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios(URL);

      setMovies(data.movies)
    }
  
    fetchMovies();
  }, []);

  return movies;
}
