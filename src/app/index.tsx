import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import * as history from 'history'
import routes, { RouteType } from './routes'
import store from './store'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router history={history.createBrowserHistory()}>
                {routes.map((route: RouteType) => (
                    <Route key={route.path} {...route} />
                ))}
            </Router>
        </Provider>
    )
}

export default App
