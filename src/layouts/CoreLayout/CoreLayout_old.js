import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
import '../../styles/mobile.scss'
import '../../styles/animation.scss'

export const CoreLayout = ({ children }) => (
  <div className='container'>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
