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
import { Link, useLocation } from 'react-router-dom';

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography component={Link} to='/' variant="h6" color="inherit">
            <img
              src=""
              alt="Paxamour"
              height="25px"
            />
          </Typography>
          <div />
          {location.pathname === '/' ? (
            <div>
              <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
