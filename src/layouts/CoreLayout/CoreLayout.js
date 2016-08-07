import React, {Component} from 'react'
import { RouteTransition , presets } from 'react-router-transition';

import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
import '../../styles/mobile.scss'
import '../../styles/animation.scss'


class CoreLayout extends Component {
  static propTypes = {
	children: React.PropTypes.element.isRequired
  }

  render () {
    return (
	  <div className='container'>
	    <Header />
	  <RouteTransition
	  	className={classes.mainContainer}
	    pathname={this.props.location.pathname}
	    {...presets.fade}
	  >
	    {this.props.children}
	  </RouteTransition>
    </div>

    )
  }
}


export default CoreLayout
