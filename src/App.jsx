import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./Layout"
import NotFoundPage from "./pages/NotFoundPage"
import Main from "./components/Main/Main"
import Profile from "./Profile"

// const router = createBrowserRouter([
//     { path: '/', element: <Main />, errorElement: <NotFoundPage /> },
//     {
//         path: '/profile', element: <Profile />, children: [
//             { path: '/profile/:id', element: <Profile /> }
//         ]
//     }
// ])

const router = createBrowserRouter([
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

function App() {
    return <RouterProvider router={router} />
}

export default App
