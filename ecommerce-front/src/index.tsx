import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AnotherStore from './anotherStore';
// import { API } from './config';
import Routes from './Routes';
import store, {history} from './store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AnotherStore>
        <Routes />
      </AnotherStore>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
