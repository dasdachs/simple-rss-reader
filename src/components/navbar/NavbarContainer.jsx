import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleDrawer, updateFeed } from '../../actions';

import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionUpdate from 'material-ui/svg-icons/action/update';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import DrawerAvatar from './DrawerAvatar';

import './Navbar.css';

class NavbarContainer extends Component {    
    constructor(props) {
        super(props);
        this.drawer = this.drawer.bind(this);
        this.update = this.update.bind(this);
    }

    drawer() {
        this.props.toggleDrawer(this.props.drawerOpen)
    }

    update() {
        this.props.updateFeed();
    }

    render() {
        return (
            <div>
                <AppBar 
                    title={this.props.navbarTitle} 
                    onLeftIconButtonClick={this.drawer}
                    iconElementRight={
                        <IconButton onClick={this.update}>
                            <ActionUpdate hoverColor='#222' />
                        </IconButton>
                    }
                />
                <Drawer open={this.props.drawerOpen} containerClassName='container'>
                    <IconButton onClick={this.drawer} className='close'>
                        <NavigationClose />
                    </IconButton>
                    <div className='drawer-menu'> 
                        <DrawerAvatar profilePicture={this.props.avatar} user={this.props.user} />
                        <MenuItem>Tag #1</MenuItem>
                        <MenuItem>Tag #2</MenuItem>
                        <MenuItem><ActionSettings /></MenuItem>
                    </div>
                </Drawer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    drawerOpen: state.appState.drawerOpen,
    navbarTitle: state.appSettings.navbarTitle,
    user: state.appSettings.user,
})

const mapDispatchToProps = dispatch => (
    {
        toggleDrawer: (drawerOpen) => {dispatch(toggleDrawer(drawerOpen))},
        updateFeed: () => {dispatch(updateFeed())},
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);