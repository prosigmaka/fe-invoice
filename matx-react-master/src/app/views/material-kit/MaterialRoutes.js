import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';
 
const AppTable = Loadable(lazy(() => import("./tables/AppTable")));
const AppForm = Loadable(lazy(() => import("./forms/AppForm")));
 
const materialRoutes = [
    {
        path: '/invoice',
        // path: '/material/table',
        element: <AppTable />,
    },
    {
        path: '/form',
        // path: '/material/form',
        element: <AppForm />,
    },
     
]
 
export default materialRoutes