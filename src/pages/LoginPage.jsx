function LoginPage() {

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)

        console.log(form)
    }

    return <>
        <h1>Page de connexion</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
            <label htmlFor="login">
                <input type="text" id="login" placeholder="Entrez votre pseudo" />
            </label>
            </p>

            <p>
            <label htmlFor="password">
                <input type="password" id="password" placeholder="Password" />
            </label>
            </p>

            <p>
                <input type="submit" value="Envoyer" />
            </p>
        </form>
    </>

}

export default LoginPage
