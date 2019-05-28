import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";

const styles = {};

class CardClass extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom>{this.props.coin}</Typography>
        </CardContent>
      </Card>
    );
  }
}

CardClass.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardClass);
