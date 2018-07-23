import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: "#1f1f1f" }}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              Restaurent Managment System
            </Typography>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default NavBar;

