import './register.css'

export default function Register() {
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial.
                    </span>
                </div>
                <div className="loginRight">
                    <form action="" className="loginBox">
                        <input 
                            placeholder="Username"
                            required
                            // ref={username}
                            className="loginInput"
                        />
                        <input
                            placeholder="Email"
                            required
                            // ref={email}
                            className="loginInput"
                            type="email"
                        />
                        <input
                            placeholder="Password"
                            required
                            // ref={password}
                            className="loginInput"
                            type="password"
                            minLength="6"
                        />
                        <input
                            placeholder="Password Again"
                            required
                            // ref={passwordAgain}
                            className="loginInput"
                            type="password"
                        />
                        <button className="loginButton">Sign up</button>
                        <button className="loginRegisterButton">Login account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}