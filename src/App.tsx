import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { fetchAbilities } from './redux/actions/pokemon';
import { AppState } from './interfaces/common';
import { getLogs } from './redux/selectors/logs';
import { getAbility } from './redux/selectors/ability';

interface Input {
  handleChange: (value: number) => void;
  value: number;
  hint: string;
}
function InputWrapper({ handleChange, value, hint }: Input) {
  return (
    <div className='formWrapper'>
      <input
        type='text'
        onChange={(e) => {
          handleChange(Number(e.target.value));
        }}
        value={value}
      />
      <small>{hint}</small>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const logs = useSelector(getLogs);
  const { ability, loading, limit, offset } = useSelector((state: AppState) =>
    getAbility(state)
  ); // For illustrative purposes
  const [lLimit, setLimit] = useState(limit);
  const [lOffset, setOffset] = useState(offset);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <h3>persisted redux state playground (session storage)</h3>
        <div className='container'>
          <div className='data'>
            <h5>Click on the button to trigger async action</h5>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <button
                disabled={loading}
                onClick={() => dispatch(fetchAbilities(lLimit, lOffset))}
              >
                {loading ? 'Fetching...' : 'Fetch pokemon ability'}
              </button>
              <InputWrapper
                value={lLimit}
                handleChange={setLimit}
                hint='set custom limit'
              />
              <InputWrapper
                value={lOffset}
                handleChange={setOffset}
                hint='set custom offset'
              />
            </div>
            <div style={{ width: '100%' }}>
              <h6 style={{ textAlign: 'center' }}>Pokemon Abilities</h6>
              <ol>
                {ability.map(({ name, url }) => (
                  <li key={name}>
                    <a
                      className='link'
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className='data'>
            <h6>None persistent async action Logs</h6>
            <div className='log-header'>
              <p className='log-title'>DateTime</p>
              <p className='log-title'>endpoint</p>
            </div>
            {logs.map(({ time, url }) => (
              <div key={url} className='log-header'>
                <p className='log-text'>{time}</p>
                <code className='log-time'>{url}</code>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
