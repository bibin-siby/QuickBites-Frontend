import React from 'react'
import Styles from './best.module.scss'

const Best = () => {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Sub}>
                <span className={Styles.Title}>Best Places to Eat Across Cities</span>
                <div className={Styles.Column}>
                    <div className={Styles.Details}>
                        <span>Best Restaurants in Bengaluru</span>
                    </div>
                    <div className={Styles.Details}>
                        <span>Best Restaurants in Pune</span>
                    </div>
                    <div className={Styles.Details}>
                        <span>Best Restaurants in Chennai</span>
                    </div>
                </div>
                <div className={Styles.Column}>
                    <div className={Styles.Details}>
                        <span>Best Restaurants in Hyderabad</span>
                    </div>
                    <div className={Styles.Details}>
                        <span>Best Restaurants in Kochi</span>
                    </div>
                    <div className={Styles.Details}>
                        <span>Best Restaurants in Kolkata</span>
                    </div>
                </div>
            </div>
            <div className={Styles.Sub}>
                <span className={Styles.Title}>Best Cuisines Near Me</span>
                <div className={Styles.Column}>
                    <div className={Styles.Details}>
                        <span>Chinese Restaurant Near Me</span>
                    </div><div className={Styles.Details}>
                        <span>South Indian Restaurant Near Me</span>
                    </div><div className={Styles.Details}>
                        <span>North Indian Restaurant Near Me</span>
                    </div>
                </div>
                <div className={Styles.Column}>
                    <div className={Styles.Details}>
                        <span>Italian Restaurant Near Me</span>
                    </div><div className={Styles.Details}>
                        <span>French Restaurant Near Me</span>
                    </div><div className={Styles.Details}>
                        <span>Seafood Restaurant Near Me</span>
                    </div>
                </div>
                {/* <div className={Styles.Column}>
                    <div className={Styles.Details}>
                        <span>Chinese Restaurant Near Me</span>
                    </div><div className={Styles.Details}>
                        <span>Chinese Restaurant Near Me</span>
                    </div><div className={Styles.Details}>
                        <span>Chinese Restaurant Near Me</span>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Best