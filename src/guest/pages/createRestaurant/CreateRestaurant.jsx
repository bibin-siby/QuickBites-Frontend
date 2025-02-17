import React from 'react'
import Styles from './createRestaurant.module.scss'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from 'react-router-dom'
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
                <Link className={Styles.Link}>Register Now</Link>
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
                    </div>
                    <div className={Styles.Detail}>
                        <div className={Styles.Cell}>
                            <TaskAltIcon className={Styles.Icon} />
                            <span className={Styles.Text}>
                                FSSAI license
                            </span>
                        </div>
                        <div className={Styles.Cell}>
                            <TaskAltIcon className={Styles.Icon} />
                            <span className={Styles.Text}>
                                Menu & profile food image What is profile food image?Refer here
                            </span>
                        </div>
                    </div>
                    <div className={Styles.Detail}>
                        <div className={Styles.Cell}>
                            <TaskAltIcon className={Styles.Icon} />
                            <span className={Styles.Text}>
                                Bank account details
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRestaurant