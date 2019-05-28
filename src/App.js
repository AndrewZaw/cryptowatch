import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Layouts/Header";
import Body from "./Layouts/Body";
import Footer from "./Layouts/Footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "typeface-roboto";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
  /*palette: {
    textColor: "#ffffff",
    primary: { main: "#8AAAE5" },
    secondary: { main: "#ffffff" }
  }*/
});

const styles = {
  root: {
    width: "500px"
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      coinData: {}
    };
  }

  componentDidMount() {
    fetch("/api")
      .then(res => res.json())
      .then(response => this.setState({ coinData: response }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <Header />
          <Body coinData={this.state.coinData} />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
