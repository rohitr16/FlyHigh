import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter} from 'react-router-dom';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider> 
);
