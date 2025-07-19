import '../styles/homepage.css'
import Navbar from '../general/navbar';
import { NavLink } from 'react-router-dom';


function LandingPage() {
    
    function scrollToTop() {
            window.scrollTo(0, 0);
    }
    return (
        <>
        <Navbar />
        <section className='landing'>
            <div className='banner'> </div>
            <div className='landing-content'>
                <div className='grey-box'>
                    <h1>FCFG - Banking Made Simple, Secure, and Seamless</h1>
                    <p>Deposit checks in a snap, get alerts, move money and sign-in with ease</p>
                    <NavLink to="signup" onClick={scrollToTop}><button>Get Started Now</button></NavLink>
                </div>
                <div className='side-box'>
                    <div className='left-side'></div>
                    <div className='right-side'>
                        <h1>No-impact, no worries</h1>
                        <p>check if you are pre-approved for card offers with no impact to your credit score</p>
                        <span>See if i'm pre-approved <i className='bi-chevron-right'></i></span>
                    </div>
                </div>
                <div className='side-box'>
                    <div className='left-side2'></div>
                    <div className='right-side'>
                        <h1>Savings starts here</h1>
                        <p>Keep your money growing with one of the best savings rates in America.</p>
                        <span>See if i'm pre-approved <i className='bi-chevron-right'></i></span>
                    </div>
                </div>
                <div className='side-box'>
                    <div className='left-side3'></div>
                    <div className='right-side'>
                        <h1>Find a car you love</h1>
                        <p>Search millions of cars from thousands of dealers, nationwide—it's easy.</p>
                        <span>See if i'm pre-approved <i className='bi-chevron-right'></i></span>
                    </div>
                </div>
            </div>

            <div className='help'>
                <h1>HOW CAN WE HELP?</h1>
                <div className='question'>
                    <div className='q1'>
                        <p>I want to</p>
                        <select>
                            <option>Open an account</option>
                            <option>Link My Account</option>
                        </select>
                    </div>
                    <div className='q1 q2'>
                        <p>So that I can</p>
                        <select>
                            <option>Open an account</option>
                            <option>Link My Account</option>
                        </select>
                    </div>
                    <button className='sug-btn'>See suggestions</button>
                </div>
            </div>

            <div className='tools'>
                <div className='tools-pic'></div>
                <div className='tools-text'>
                    <p>DIGITAL TOOLS FOR EASE</p>
                    <h1>Save time, shop online more easily and stay in the know</h1>
                    <h3>Get the support of our helpful digital tools like the Capital One Mobile app, virtual cards, proactive alerts and more.</h3>
                    <span>Explore all tools <i className='bi-chevron-right'></i></span>
                </div>
            </div>

            <div className='tools'>
                <div className='tools-pic2'></div>
                <div className='tools-text'>
                    <p>FINANCIAL WELLNESS</p>
                    <h1>Put CreditWise in your pocket</h1>
                    <h3>Get help building your credit score and financial future wit our website.</h3>
                    <span>Get Started <i className='bi-chevron-right'></i></span>
                </div>
            </div>

            <div className='more'>

                <h1 className='more-head'> WE'RE MORE THAN JUST A BANK </h1>


                <div className='more-box'>
                    <div className='more-pic'></div>
                    <div className='more-text'>
                        <h1>Learn to manage your money to empower what you love</h1>
                        <p>Get inspired with fresh tips on smart ways to manage, spend and earn.</p>
                    </div>

                </div>

                <div className='more-box'>
                    <div className='more-pic2'></div>
                    <div className='more-text'>
                        <h1>Enabling communities to thrive</h1>
                        <p> Our approach to ESG strives to address key issues facing society.</p>
                    </div>

                </div>

                <div className='more-box'>
                    <div className='more-pic3'></div>
                    <div className='more-text'>
                        <h1>Bank and save on summer sips</h1>
                        <p> Grab $3.60 drinks at your Capital One Café every Friday through Aug. 29.</p>
                    </div>

                </div>


            </div>
        </section>
        </>
    )
}


export default LandingPage;