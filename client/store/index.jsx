
import { createStore, applyMiddleware } from 'redux';
import { syncHistory } from 'redux-simple-router'

import rootReducer from '../reducers';

export default function configure(initialState, history) {

    const reduxRouterMiddleware = syncHistory(history);
    const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

  return store;
}
