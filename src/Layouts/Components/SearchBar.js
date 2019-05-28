import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Typography, TextField, InputBase } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  search: {
    position: "relative",
    textAlign: "center",
    marginTop: "15px",
    marginLeft: "125px",
    width: "250px",
    borderRadius: "5px",
    backgroundColor: fade("#000", 0.15),
    "&:hover": {
      backgroundColor: fade("#000000", 0.25)
    }
  },
  searchIcon: {
    position: "absolute"
  },
  inputRoot: {
    padding: "2px 5px 2px 15px"
  },
  inputInput: { width: "250px" }
});

class SearchBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.search}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
      </Fragment>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
