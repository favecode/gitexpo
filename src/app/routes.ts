import Explore from './pages/Explore'

export interface RouteType {
    exact?: boolean
    path: string
    component: React.ComponentType
}

const routes: RouteType[] = [
    {
        exact: true,
        path: '/explore',
        component: Explore,
    },
]

export default routes
