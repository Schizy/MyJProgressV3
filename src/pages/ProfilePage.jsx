import { useParams, Outlet } from "react-router-dom"

function ProfilePage() {
    const {id} = useParams()
    return <>
        <h1>Profile</h1>
        <p>Bonjour {id ? id : 'inconnu'}</p>
        <hr />
        <Outlet />
    </>
}

export default ProfilePage
