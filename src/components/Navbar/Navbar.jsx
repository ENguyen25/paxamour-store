import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
//   const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <img
              src=""
              alt="Paxamour"
              height="25px"
            />
          </Typography>
          <div />
          <div>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
