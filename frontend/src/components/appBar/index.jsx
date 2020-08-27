import React, { Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export default class CustomAppBar extends Component {

  render(){
    return (
      <AppBar position="static"  style={{"boxShadow": "none"}}>
        <Toolbar>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6" >
                Paintmate
              </Typography>
            </Grid>
            <Grid item container sm alignItems="center" justify="flex-end">
              <Grid item sm={2}>
                <Link to="/" color="textPrimary">Home</Link>
              </Grid>
              <Grid item sm={2} >
                <Link to="/products" color="textPrimary">Products</Link>
              </Grid>
              <Grid item sm={2}>
                <Link to="/our-story" color="textPrimary">Our Story</Link>
              </Grid>
              <Grid item sm={2}>
                <Link to="/contact-us" color="textPrimary">Contact Us</Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
