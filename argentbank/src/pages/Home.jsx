import Header from '../components/Header';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import IconChat from '../assets/icon-chat.png'
import IconMoney from '../assets/icon-money.png'
import IconSecurity from '../assets/icon-security.png'
import Footer from '../components/Footer';
import '../styles/Home.css'


function Home() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <section className='features'>
                    <h2 className="sr-only">Features</h2>
                    <Feature title="You are our #1 priority" image={IconChat}>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </Feature>
                    <Feature title="More savings means higher rates" image={IconMoney}>
                        The more you save with us, the higher your interest rate will be!
                    </Feature>
                    <Feature title="Security you can trust" image={IconSecurity}>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </Feature>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Home