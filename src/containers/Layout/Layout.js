import React, { Component } from 'react'

import ToolBar from '../../components/Navigation/ToolBar/ToolBar'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = { showSideDrawer: false }

  sideDrawerToggelHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() { 
    return (
      <Aux>
        <ToolBar toggleSideBar={this.sideDrawerToggelHandler}/>
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerToggelHandler} />
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}
 
export default Layout;