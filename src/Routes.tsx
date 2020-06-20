import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import { history } from './redux/store';


const Routes: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
