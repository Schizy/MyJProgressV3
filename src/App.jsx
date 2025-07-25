import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Profile from "./Profile"
import NotFoundPage from "./pages/NotFoundPage"

const router = createBrowserRouter([
    { path: '/', element: <Main />, errorElement: <NotFoundPage /> },
    {
        path: '/profile', element: <Profile />, children: [
            { path: '/profile/:id', element: <Profile /> }
        ]
    }
])

function App() {
        /**
            Comment faire pour avoir du routing dans Header?
            Si je le met dans les pages, je vais deevoir l'import dans chaquee page ??
         */
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <RouterProvider router={router} />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App
