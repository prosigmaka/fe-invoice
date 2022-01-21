import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const NotFound = Loadable(lazy(() => import("./NotFound")));
const JwtLogin = Loadable(lazy(() => import("./login/JwtLogin")));

const sessionRoutes = [

    {
        path: '/session/signin',
        element: <JwtLogin />,
    },
    {
        path: '/session/404',
        element: <NotFound />,
    },
]

export default sessionRoutes
