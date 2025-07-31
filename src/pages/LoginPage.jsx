function LoginPage() {

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        
        // Méthode 1: Récupérer les valeurs individuellement
        const login = form.get('login')
        const password = form.get('password')
        
        console.log('Login:', login)
        console.log('Password:', password)

        
    }

    return <>
        <h1>Page de connexion</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
            <label htmlFor="login">
                <input type="text" id="login" name="login" placeholder="Entrez votre pseudo" />
            </label>
            </p>

            <p>
            <label htmlFor="password">
                <input type="password" id="password" name="password" placeholder="Password" />
            </label>
            </p>

            <p>
                <input type="submit" value="Envoyer" />
            </p>
        </form>
    </>

}

export default LoginPage