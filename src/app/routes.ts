import Explore from './pages/Explore'

export interface RouteType {
    exact?: boolean
    path: string
    component: React.ComponentType
}

// Routes of page
const routes: RouteType[] = [
    {
        exact: true,
        path: '/',
        component: Explore,
    },
]

export default routes
