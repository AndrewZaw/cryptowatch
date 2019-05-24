import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import TocIcon from "@material-ui/icons/Toc";

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit">
              <TocIcon />
            </IconButton>
            <Typography variant="h4" color="inherit" className={classes.title}>
              CryptoWatch
            </Typography>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
