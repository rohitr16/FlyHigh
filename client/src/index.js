import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
    <Provider store={store}>
        <App />
    </Provider> 
);
