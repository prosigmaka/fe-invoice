import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Home = Loadable(lazy(() => import("../Home/Home")));

const dashboardRoutes = [
    {
        path: '/dashboard/default',
        // element: <Analytics />,
        element: <Home />,
    },
]

export default dashboardRoutes
