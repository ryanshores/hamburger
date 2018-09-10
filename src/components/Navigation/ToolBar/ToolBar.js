import React from 'react';

import classes from './ToolBar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const toolbar = (props) => {
  return ( 
    <header className={classes.ToolBar}>
      <DrawerToggle click={props.toggleSideBar}/>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
   );
}
 
export default toolbar;