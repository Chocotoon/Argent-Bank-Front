import '../styles/Account.css'
import { useSelector } from 'react-redux'
import { isVueToggled } from '../app/selectors';

function Account({ title, amount, description }) {

    const editToggle = useSelector(isVueToggled)

    return (

        <section className="account" style={{border:`${!editToggle ? "1px solid black"  : "1px solid lightgrey"}`}}>
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className={`${!editToggle ?
                    'transaction-button' : 'transaction-button-toggled'}`}>
                    View transactions
                </button>
            </div>
        </section>

    )
}

export default Account