import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

// const ulStyles = theme => ({
//   root: {
//     padding: theme.spacing.unit,
//     [theme.breakpoints.down("sm")]: {
//       backgroundColor: theme.palette.secondary.main
//     },
//     [theme.breakpoints.up("md")]: {
//       backgroundColor: theme.palette.primary.main
//     },
//     [theme.breakpoints.up("lg")]: {
//       backgroundColor: green[500]
//     }
//   }
// });

const styles = {
  ul: {
    listStyleType: "none",
    marginLeft: "15%"
  },
  li: {
    display: "inline",
    marginRight: "15px"
  }
};

const Nav = () => {
  return (
    <nav>
      <AppBar color="default">
        <ul style={styles.ul}>
          <li style={styles.li}>
            <a href="#about-me">
              <Button color="inherit">About Me</Button>
            </a>
          </li>
          <li style={styles.li}>
            <a href="#fav-foods">
              <Button color="inherit">Favourite Foods</Button>
            </a>
          </li>
          <li style={styles.li}>
            <a href="#contact">
              <Button color="inherit">Contact Details</Button>
            </a>
          </li>
        </ul>
      </AppBar>
    </nav>
  );
};

export default Nav;
