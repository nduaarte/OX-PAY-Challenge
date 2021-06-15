import { createStore } from 'redux';
import { combineReducers } from 'redux';

import MovieInfoReducer from './MovieInfoReducer';

const rootReducer = combineReducers({
  MovieInfoReducer: MovieInfoReducer,
});

export const store = createStore(rootReducer);