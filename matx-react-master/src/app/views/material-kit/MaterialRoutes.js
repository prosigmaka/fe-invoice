import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';
 
const AppTable = Loadable(lazy(() => import("./tables/AppTable")));
const AppForm = Loadable(lazy(() => import("./forms/AppForm")));
const AppDetail = Loadable(lazy(() => import("./tables/DetailPage")));
 
const materialRoutes = [
    {
        path: '/invoice',
        // path: '/material/table',
        element: <AppTable />,
    },
    {
        path: '/invoice/detail',
        // path: '/material/table',
        element: <AppDetail />,
    },
    {
        path: '/form',
        // path: '/material/form',
        element: <AppForm />,
    },
     
]
 
export default materialRoutes