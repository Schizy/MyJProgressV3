import { createBrowserRouter } from "react-router-dom"

import Layout from "./Layout"
import NotFoundPage from "./pages/NotFoundPage"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/login', element: <LoginPage /> },
            { path: '/profile', element: <ProfilePage /> },
            { path: '/profile/:id', element: <ProfilePage /> }
        ]
    }
])
