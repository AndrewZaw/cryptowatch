import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SearchBar from "./Components/SearchBar";

const styles = {};

class Body extends Component {
  render() {
    return <SearchBar />;
  }
}

Body.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Body);
