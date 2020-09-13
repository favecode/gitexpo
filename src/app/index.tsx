import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Router, Route } from 'react-router-dom'
import * as history from 'history'
import Initialize from 'app/components/Initialize'
import routes, { RouteType } from './routes'
import apollo from 'app/apollo'
import ContextProvider from 'app/contexts'

const App: React.FC = () => {
    return (
        <ContextProvider>
            <ApolloProvider client={apollo}>
                <Initialize />
                <Router history={history.createBrowserHistory()}>
                    {routes.map((route: RouteType) => (
                        <Route key={route.path} {...route} />
                    ))}
                </Router>
            </ApolloProvider>
        </ContextProvider>
    )
}

export default App
