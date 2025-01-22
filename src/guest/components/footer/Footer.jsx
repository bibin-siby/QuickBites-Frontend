import React from 'react'
import Styles from './footer.module.scss'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.row}>
        <div className={Styles.app}>
          For better experience,download the Swiggy app now
          <img className={Styles.icon} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Download Android App"></img>
          <img className={Styles.icon} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="Download iOS App"></img>
        </div>
      </div>
      <div className={Styles.row2}>
        <div className={Styles.details}>
          <div className={Styles.logo}>
            <div className={Styles.section1}>
              <DeliveryDiningIcon className={Styles.icon} /> 
              <span>QuickBites</span>
            </div>
            <div className={Styles.section2}>
              <span>@ 2025 QuickBites limited</span>
            </div>
          </div>
        </div>
        <div className={Styles.Column}>
          <span className={Styles.title}>Contact Us</span>
          <div className={Styles.details}>
            <span>Help & Support</span>
            <span>Partner with us</span>
            <span>Ride with us</span>
          </div>
        </div>
        <div className={Styles.Column}>
          <span className={Styles.title}>Legal</span>
          <div className={Styles.details}>
            <span>Terms & Conditions</span>
            <span>Cookie Policy</span>
            <span>Privacy Policy</span>
            <span>Investor Relations</span>
          </div>
        </div>
        <div className={Styles.Column}>
          <span className={Styles.title}>Available in</span>
          <div className={Styles.details}>
            <span>Bangalore</span>
            <span>Gurgaon</span>
            <span>Hyderabad</span>
            <span>Mumbai</span>
            <span>Pune</span>
            <span>Kochi</span>
            <span>Chennai</span>
            <span>And 600 more cities</span>
          </div>
        </div>
        <div className={Styles.Column}>
          <span className={Styles.title}>Social Links</span>
          <div className={Styles.details2}>
            <XIcon className={Styles.icon}/>
            <InstagramIcon className={Styles.icon}/>
            <PinterestIcon className={Styles.icon}/>
            <LinkedInIcon className={Styles.icon}/>
            <FacebookIcon className={Styles.icon}/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer