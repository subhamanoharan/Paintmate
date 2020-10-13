import React, { Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const MaterialUILink = ({to, text}) => (
  <NavLink to={to} component={MaterialLink} color="textPrimary" activeStyle={{color: "red"}}>{text}</NavLink>
);

export default class PageNav extends Component {

  render(){
    return (
      <Grid item container sm alignItems="center" justify="flex-end">
        <Grid item sm={2}>
          <MaterialUILink to="/" text="Home" />
        </Grid>
        <Grid item sm={2} >
          <MaterialUILink to="/products" text="Products" />
        </Grid>
        <Grid item sm={2}>
          <MaterialUILink to="/our-story" text="Our Story" />
        </Grid>
        <Grid item sm={2}>
          <MaterialUILink to="/contact-us" text="Contact Us" />
        </Grid>
      </Grid>
    );
  }
}
