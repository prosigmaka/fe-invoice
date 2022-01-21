import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';
 
const AppTable = Loadable(lazy(() => import("./tables/AppTable")));
const AppForm = Loadable(lazy(() => import("./forms/AppForm")));
 
const materialRoutes = [
    {
        path: '/material/table',
        element: <AppTable />,
    },
    {
        path: '/material/form',
        element: <AppForm />,
    },
     
]
 
export default materialRoutes