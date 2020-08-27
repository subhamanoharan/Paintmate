import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import AppBar from '../appBar';
import Carousel from '../carousel';
import ProsList from '../prosList';

export default class HomePage extends Component {

  render(){
    return (
        <Grid container direction="column" wrap="nowrap" spacing={1} style={{margin: '0px'}}>
          <Grid item>
            <Divider/>
            <ProsList />
            <Divider/>
          </Grid>
          <Grid item>
            <Carousel />
          </Grid>
        </Grid>
    );
  }
}
