import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import Carousel from '../carousel';
import PageNav from '../pageTabNav';

export default class HomePage extends Component {

  render(){
    return (
        <Grid container direction="column" wrap="nowrap" spacing={1} style={{margin: '0px'}}>
          <Grid item>
            <PageNav />
          </Grid>
          <Grid item>
            <Carousel />
          </Grid>
        </Grid>
    );
  }
}
