import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CardClass from "./Components/CardClass";
import SearchBar from "./Components/SearchBar";

const styles = {};

class Body extends Component {
  constructor() {
    super();
  }
  render() {
    var coinName = "";
    if (Object.keys(this.props.coinData).length) {
      coinName = this.props.coinData.data["2"].name;
    }
    return (
      <Fragment>
        <SearchBar />
        <br />
        <CardClass coin={coinName} />
        <CardClass />
      </Fragment>
    );
  }
}

Body.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Body);
