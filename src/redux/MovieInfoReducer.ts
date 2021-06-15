export interface RootState {
  MovieInfoReducer: {
    movie: {
      title: string;
      posterUrl: string;
      runtime: number;
      year: string;
      actors: string;
      genres: Array<string>;
      director: string;
      plot: string;
    }
  }
}

const INITIAL_STATE = {
  movie: {}
};

export default function MovieInfoReducer(state = INITIAL_STATE, action: { type: any; value: object; }) {
  switch (action.type) {
    case 'UPDATE_MOVIE':
      return { ...state, movie: action.value };
    default:
      return state;
  }
}

export function UPDATE_MOVIE(value: object) {
  return { type: 'UPDATE_MOVIE', value };
};