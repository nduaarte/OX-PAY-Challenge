import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'

import GlobalStyles from './Styles/GlobalStyles';
import MovieList from './Pages/MovieList';
import MoveInfo from './Pages/MoveInfo';

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyles />

      <Switch>
        <Route exact path='/' component={MovieList} />
        <Route path='/movieInfo' component={MoveInfo} />
      </Switch>
    </Fragment>
  );
}

export default App;
