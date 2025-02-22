import React from 'react'
import Styles from './createRestaurant.module.scss'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
const CreateRestaurant = () => {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Title}>
                <span className={Styles.Text1}>
                    Partner with QuickBites and grow your business
                </span>
                <span className={Styles.Text2}>
                    0% commission for 1st month! Valid for new restaurant partners in select cities
                </span>
                <Link className={Styles.Link} to="/restaurantRegister">Register Now</Link>
            </div>
            <div className={Styles.Card}>
                <span className={Styles.Text1}>
                    Get Started - It only takes 10 minutes
                </span>
                <span className={Styles.Text2}>
                    Please keep these documents and details ready for a smooth sign-up
                </span>
                <div className={Styles.Details}>
                    <div className={Styles.Detail}>
                        <div className={Styles.Cell}>
                            <TaskAltIcon className={Styles.Icon} />
                            <span className={Styles.Text}>
                                PAN card
                            </span>
                        </div>
                        <div className={Styles.Cell}>
                            <TaskAltIcon className={Styles.Icon} />
                            <span className={Styles.Text}>
                                GST number
                            </span>
                        </div>
                        <div className={Styles.Cell}>
                            <TaskAltIcon className={Styles.Icon} />
                            <span className={Styles.Text}>
                                FSSAI license
                            </span>
                        </div>
                    </div>
                    <div className={Styles.Detail}>
                        <div className={Styles.Cell}>
                            <TaskAltIcon className={Styles.Icon} />
                            <span className={Styles.Text}>
                                Menu & profile food image
                            </span>
                        </div>
                        <div className={Styles.Cell}>
                            <TaskAltIcon className={Styles.Icon} />
                            <span className={Styles.Text}>
                                Bank account details
                            </span>
                        </div>
                    </div>
                    <div className={Styles.Detail}>
                        <video className={Styles.Videos} src='https://b.zmtcdn.com/data/file_assets/5835a67ef0191da3b505988b3ff9a0141720502359.mp4'></video>
                        <span>Video</span>
                    </div>
                </div>
            </div>
            <div className={Styles.Content}>
                <div className={Styles.Head}>
                    <span>Why you should partner with QuickBites</span>
                </div>
                <div className={Styles.Column}>
                    <div className={Styles.Cell}>
                        <img src='https://b.zmtcdn.com/data/o2_assets/546cc9c88402b3bc3b2980137b157d0a1724921700.png'></img>
                        <span className={Styles.Main}>Attract new customers</span>
                        <div className={Styles.Texts}>
                            <span className={Styles.Sub}>Reach the millions of people</span>
                            <span className={Styles.Sub}>ordering on Zomato</span>
                        </div>
                    </div>
                    <div className={Styles.Cell}>
                        <img src='https://b.zmtcdn.com/data/o2_assets/91fdfc547485f6d3c09ba49a925d5ccd1724921680.png'></img>
                        <span className={Styles.Main}>Doorstep delivery convenience
                        </span>
                        <div className={Styles.Texts}>
                            <span className={Styles.Sub}>Easily get your orders delivered through </span>
                            <span className={Styles.Sub}>our trained delivery partners</span>
                        </div>
                    </div>
                    <div className={Styles.Cell}>
                        <img src='https://b.zmtcdn.com/data/o2_assets/373ac53fbbcc7eb345fac0ab74df1d921724921640.png'></img>
                        <span className={Styles.Main}>Hotline support
                            +91 97-38-38-38-38</span>
                        <div className={Styles.Texts}>
                            <span className={Styles.Sub}>On-call support for any issues</span>
                            <span className={Styles.Sub}>or growth consultations</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.Stories}>
                <span className={Styles.Head}>Restaurant Success Stories</span>
                <div className={Styles.Row}>
                    <div className={Styles.Cell}>
                        <span className={Styles.Story}> QuickBites enabled me to restart my operations post-COVID when I had
                            no hope of doing my business again. I'm grateful to the platform for
                            helping me thrive - my online ordering business has done so well,
                            it has even taken over my dining business!
                        </span>
                        <div className={Styles.Profile}>
                            <img src='https://b.zmtcdn.com/data/o2_assets/f596e23083bcaf7790bd06fa5bdef6641716462699.png'></img>
                            <div className={Styles.Texts}>
                                <span>Arshad Khan</span>
                                <span>Owner - Khushboo Biriyani</span>
                                <span>Kochi</span>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.Cell}>
                        <span className={Styles.Story}> QuickBites enabled me to restart my operations post-COVID when I had
                            no hope of doing my business again. I'm grateful to the platform for
                            helping me thrive - my online ordering business has done so well,
                            it has even taken over my dining business!
                        </span>
                        <div className={Styles.Profile}>
                            <img src='https://b.zmtcdn.com/data/o2_assets/f4bbbb9e0496d7772f44d2c0129cb0fb1716462984.png'></img>
                            <div className={Styles.Texts}>
                                <span>Arshad Khan</span>
                                <span>Owner - Khushboo Biriyani</span>
                                <span>Kochi</span>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.Cell}>
                        <span className={Styles.Story}> QuickBites enabled me to restart my operations post-COVID when I had
                            no hope of doing my business again. I'm grateful to the platform for
                            helping me thrive - my online ordering business has done so well,
                            it has even taken over my dining business!
                        </span>
                        <div className={Styles.Profile}>
                            <img src='https://b.zmtcdn.com/data/o2_assets/ef35a4c36a01ebc1ab78e784986ac4af1716462944.png'></img>
                            <div className={Styles.Texts}>
                                <span>Arshad Khan</span>
                                <span>Owner - Khushboo Biriyani</span>
                                <span>Kochi</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={Styles.Questions}>
                <span className={Styles.Title2}>Frequently asked questions</span>
                <div className={Styles.Column}>
                    <div className={Styles.Question}>
                        <span className={Styles.Main}>How long will it take for a restaurant to go live on Zomato after submitting the documents?</span>
                        <span className={Styles.Sub}>Once all mandatory documents are uploaded and the contract is accepted, our team typically takes around 24 hours to verify the documents and build your menu.</span>
                    </div>
                    <div className={Styles.Question}>
                        <span className={Styles.Main}>What is the one-time onboarding fee? Do I have to pay it at the time of registration?</span>
                        <span className={Styles.Sub}>The one-time onboarding fee covers administrative, operational, and technical services, including document verification, menu digitization, quality checks, training on using the Zomato platform, and query resolutions.
                            This fee will be deducted from your statement of accounts only after your restaurant goes live on Zomato and starts receiving online orders.
                        </span>
                    </div>
                    <div className={Styles.Question}>
                        <span className={Styles.Main}>How long will it take for a restaurant to go live on Zomato after submitting the documents?</span>
                        <span className={Styles.Sub}>Once all mandatory documents are uploaded and the contract is accepted, our team typically takes around 24 hours to verify the documents and build your menu.</span>
                    </div>
                    <div className={Styles.Question}>
                        <span className={Styles.Main}>How long will it take for a restaurant to go live on Zomato after submitting the documents?</span>
                        <span className={Styles.Sub}>Once all mandatory documents are uploaded and the contract is accepted, our team typically takes around 24 hours to verify the documents and build your menu.</span>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default CreateRestaurant