import Header from "../components/Header"
import Footer from "../components/Footer"
import SignInForm from "../components/SignIn_Form"

import '../styles/SignIn.css'

function SignIn() {
   
    return (
        <div>
            <Header />
            <div className="flex">
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <SignInForm />
                </section>
            </main>
            </div>
            <Footer />
        </div>
    )
}

export default SignIn