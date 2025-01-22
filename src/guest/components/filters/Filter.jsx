import React from 'react'
import Styles from './filter.module.scss'
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Filter = () => {
  return (
    <div className={Styles.Container}>
        <div className={Styles.Filter}>
            <span>Filters</span>
            <div className={Styles.Icons}>
                <FilterListIcon  className={Styles.Icon}/>
            </div>
        </div>
        <div className={Styles.Filter}>
            <span>Sort By</span>
            <div className={Styles.Icons}>
                <KeyboardArrowDownIcon  className={Styles.Icon}/>
            </div>
        </div>
        <div className={Styles.Filter}>
            <span>Pure Veg</span>
        </div>
        <div className={Styles.Filter}>
            <span>Ratings 4.0+</span>
        </div>
        <div className={Styles.Filter}>
            <span>Rs.300 - Rs.600</span>
        </div>
        <div className={Styles.Filter}>
            <span>Less than Rs.300</span>
        </div>
    </div>
  )
}

export default Filter