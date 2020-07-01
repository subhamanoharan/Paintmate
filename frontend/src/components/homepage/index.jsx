import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid'

import AppBar from '../appBar';
import Carousel from '../carousel';
import Dummy from '../dummy';

export default class HomePage extends Component {

  render(){
    return (
      <Grid container direction="column" wrap="nowrap">
        <Grid item>
          <AppBar />
        </Grid>
        <Grid item>
          <Carousel />
        </Grid>
        <Grid item>
          <Dummy />
        </Grid>
      </Grid>
    );
  }
}
