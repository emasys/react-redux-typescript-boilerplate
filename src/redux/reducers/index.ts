import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { logs } from './logs';
import { ability } from './ability';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    logs,
    ability,
  });

export default createRootReducer;
