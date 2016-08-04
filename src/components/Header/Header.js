import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div className='p20 text-center bg-gray-light border-bottom'>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
    {' · '}
    <Link to='/test' activeClassName={classes.activeRoute}>
      Test
    </Link>
    {' · '}
    <Link to='/login' activeClassName={classes.activeRoute}>
      登录
    </Link>
  </div>
)

export default Header
