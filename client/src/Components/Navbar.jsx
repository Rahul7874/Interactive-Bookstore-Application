import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Home, ShoppingCart } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homeButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          className={classes.homeButton}
        >
          <Home />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        Interactive Bookstore Application
        </Typography>
        <IconButton color="inherit" aria-label="cart">
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
