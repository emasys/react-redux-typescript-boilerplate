import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import { initialLogState } from './redux/reducers/logs';
import { initialAbilityState } from './redux/reducers/ability';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  logs: initialLogState,
  ability: initialAbilityState
});

const Component = (
  <Provider store={store}>
    <App />
  </Provider>
);

test('renders learn react link', () => {
  const { getByText } = render(Component);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
