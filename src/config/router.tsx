
import { lazy } from 'react'
import { Router, Route, withRouter, RouteComponentProps } from "react-router";


interface YwRouter {
    path: string
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

let routes:YwRouter[] = [
    {
        path: '/button',
        component: lazy(() => import('../component/buttons'))
    },
    {
        path: '/icon',
        component: lazy(() => import('../component/icon'))
    }
]
export { routes }