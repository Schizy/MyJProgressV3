import { createBrowserRouter } from "react-router-dom"

import Layout from "./Layout"
import NotFoundPage from "./pages/NotFoundPage"
import Main from "./components/Main/Main"
import Profile from "./Profile"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            { path: '/', element: <Main /> },
            { path: '/profile', element: <Profile /> },
            { path: '/profile/:id', element: <Profile /> }
        ]
    }
])
