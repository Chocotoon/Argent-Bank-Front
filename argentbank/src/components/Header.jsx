import Logo from '../assets/argentBankLogo.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, isVueToggled } from '../app/selectors';
import { logoutUser } from '../app/store';

function Header() {

    const dispatch = useDispatch()
    const user = useSelector(getUser)
    const editToggle = useSelector(isVueToggled)

    return user ? (

        <div>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div className='user-nav'>
                    <span className="main-nav-item" style={{ color: `${editToggle ? '#616163' : '#2c3e50'}`, fontWeight: 700 }}>
                        <i className="fa fa-user-circle"></i>{user.firstName}
                    </span>
                    <Link onClick={() => dispatch(logoutUser())}
                        className="main-nav-item" to="/"
                        style={{ color: `${editToggle ? '#616163' : '#2c3e50'}` }}>
                        <i className="fa fa-sign-out"></i>
                        Sign out
                    </Link>
                </div>
            </nav >
        </div>

    )
        : (
            <div>
                <nav className="main-nav">
                    <Link className="main-nav-logo" to="/">
                        <img
                            className="main-nav-logo-image"
                            src={Logo}
                            alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign in
                    </Link>
                </nav >
            </div>
        )
}

export default Header