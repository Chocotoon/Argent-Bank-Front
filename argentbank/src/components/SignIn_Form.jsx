import '../styles/SignIn_Form.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserProfile, signUpUser } from '../services/api_calls';
import { setUser, setToken } from '../app/store'

function SignIn_Form() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let userName = document.getElementById("username").value
        let passWord = document.getElementById("password").value
        const token = await signUpUser(userName, passWord).then((valeur) => {
            let token = valeur;
            return token
        })
        dispatch(setToken(token))
        const currentUser = await getUserProfile(token)
        if (currentUser) {
            dispatch(setUser(currentUser))
            navigate(`/profile/${currentUser.id}`)
        }
    };
    return (

        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>

    )
}

export default SignIn_Form