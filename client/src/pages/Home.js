import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Grid
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LeftDivider from '../components/LeftDivider'
import UserAvatar from '../components/Avatar'

import Dashboard from './Dashboard'
import Forecast from './Forecast'
import Messaging from './Messaging'
import Rankings from './Rankings'
import RankingsSub from './RankingsSub'
import { Separator } from '../components/ui'

import { signOut } from '../redux/ducks/auth'



const drawerWidth = 270;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    // boxShadow: '16px 0px 32px rgba(128, 128, 128, 0.08)'
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor: "#f6f7f9",
    height: "90px"
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  listBox: {
    paddingTop: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,

  },


});

class Home extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme, location: { pathname }, history: { push }, signOut, user } = this.props;

    const drawer = (
      <div>
        <LeftDivider classes={classes} activeName={pathname} handleNavigation={push} />
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>

            <Grid 
              container
              justify="flex-end"
            >
              <UserAvatar signOut={signOut} user={user} />
            </Grid>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Separator vertical="50px" />
          <Route exact path="/" component={Dashboard} />
          <Route path="/forecast" component={Forecast} />
          <Route path="/messaging" component={Messaging} />
          <Route path="/rankings" component={Rankings} />
          <Route path="/rankings-sub" component={RankingsSub} />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  signOut
}


export default connect( mapStateToProps, mapDispatchToProps )(withStyles(styles, { withTheme: true })(Home))