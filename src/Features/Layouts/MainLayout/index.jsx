import React from "react";
import logo from "app/assets/logo.png";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, withStyles } from "@material-ui/core";
const WhiteTopbar = withStyles({
  root: {
    backgroundColor: "#FFFFFF",
  },
})(AppBar);

const Main = ({ children }) => {
  return (
    <>
      <WhiteTopbar position="fixed">
        <Toolbar>
          <Link to="/">
            <img
              src={logo}
              style={{
                maxHeight: 170,
                maxWidth: 250,
              }}
              alt=""
            />
          </Link>
        </Toolbar>
      </WhiteTopbar>
      <main style={{ marginTop: 57 }}>{children}</main>
    </>
  );
};

export default Main;
