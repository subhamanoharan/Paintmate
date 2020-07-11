import React, { Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

export default class CustomAppBar extends Component {

  render(){
    const preventDefault = (event) => event.preventDefault();

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
              <Grid item sm={2} >
                <Link href="#" onClick={preventDefault} color="textPrimary">Products</Link>
              </Grid>
              <Grid item sm={2}>
                <Link href="#" onClick={preventDefault} color="textPrimary">Our Story</Link>
              </Grid>
              <Grid item sm={2}>
                <Link href="#" onClick={preventDefault} color="textPrimary">Contact Us</Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
