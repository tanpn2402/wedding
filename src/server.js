import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import Home from './page/home';



module.exports = function render(initialState = {}) {
    // Model the initial state
    const store = configureStore(initialState)
    let content = renderToString(
        <Provider store={store} >
            <Home />
        </Provider>
    );

    const preloadedState = store.getState()
    return {content, preloadedState};
}
