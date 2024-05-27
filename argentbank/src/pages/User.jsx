import '../styles/User.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Account from '../components/Account'
import { useSelector, useDispatch } from "react-redux";
import { getUser, getToken, isVueToggled } from '../app/selectors';
import { putUser } from '../services/api_calls';
import { toggleVue, updateUser } from '../app/store';

function User() {
    const dispatch = useDispatch()
    const user = useSelector(getUser)
    const editToggle = useSelector(isVueToggled)
    const token = useSelector(getToken)

    async function handleSaveUser() {
        const firstName = document.getElementById("firstname").value
        const lastName = document.getElementById("lastname").value
        putUser(token, firstName, lastName)
        dispatch(updateUser(
            {
                firstname: firstName,
                lastname: lastName
            })
        )
        dispatch(toggleVue())
    }
    return !editToggle ? (
        <div>
            <Header />
            <div className="flex">
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
                        <button className="edit-button" onClick={
                            () => dispatch(toggleVue())}>
                            Edit Name
                        </button>
                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    <Account title="Argent Bank Checking (x8349)"
                        amount="$2,082.79"
                        description="Available Balance" />
                    <Account title="Argent Bank Savings (x6712)"
                        amount="$10,928.42"
                        description="Available Balance" />
                    <Account title="Argent Bank Credit Card (x8349)"
                        amount="$184.30"
                        description="Current Balance" />
                </main>
            </div>
            <Footer />
        </div>

    )
        :
        (
            <div>
                <Header />
                <div className="flex">
                    <main className="main bg-light">
                        <div className="header">
                            <h1 style={{ color: "black" }}>Welcome back<br />
                                <div className='fields'>
                                    <input type='text'
                                        id='firstname'
                                        placeholder={`${user.firstName}`} />
                                    <input type="text"
                                        id='lastname'
                                        placeholder={`${user.lastName}`} />
                                </div>
                            </h1>
                            <div className='update-buttons'>
                                <button className="save-button" onClick={handleSaveUser}>
                                    Save
                                </button>
                                <button className="cancel-button" onClick={
                                    () => dispatch(toggleVue())}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <h2 className="sr-only">Accounts</h2>
                        <Account title="Argent Bank Checking (x8349)"
                            amount="$2,082.79"
                            description="Available Balance" />
                        <Account title="Argent Bank Savings (x6712)"
                            amount="$10,928.42"
                            description="Available Balance" />
                        <Account title="Argent Bank Credit Card (x8349)"
                            amount="$184.30"
                            description="Current Balance" />
                    </main>
                </div>
                <Footer />
            </div>

        )
}

export default User