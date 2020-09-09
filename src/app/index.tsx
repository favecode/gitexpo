import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks'
import { Router, Route } from 'react-router-dom'
import * as history from 'history'
import routes, { RouteType } from './routes'
import apollo from 'app/apollo'
import store from './store'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ApolloProvider client={apollo}>
                <Router history={history.createBrowserHistory()}>
                    {routes.map((route: RouteType) => (
                        <Route key={route.path} {...route} />
                    ))}
                </Router>
            </ApolloProvider>
        </Provider>
    )
}

export default App
