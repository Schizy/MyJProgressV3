import { useParams, Outlet } from "react-router-dom"

function Profile() {
    const params = useParams()
    return <>
        <h1>Profile</h1>
        <p>Bonjour {params.id ? params.id : 'inconnu'}</p>
        <hr />
        <Outlet />
    </>
}

export default Profile