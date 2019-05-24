import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Typography, TextField } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  search: {
    width: "400px",
    display: "block",
    margin: "0 auto"
  },
  searchIcon: {
    position: "absolute"
  }
});

class SearchBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <TextField
          id="standard-search"
          label="Search..."
          type="search"
          margin="auto"
          fullWidth="true"
          className={classes.search}
        />
        <SearchIcon className={classes.searchIcon} />
      </Fragment>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
