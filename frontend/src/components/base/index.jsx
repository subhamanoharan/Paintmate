import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import ProsList from '../prosList';
import PageNav from '../pageTabNav';

export default class Base extends Component {
  render(){
    return (
      <Grid container direction="column">
        <Grid item style={{display: "contents"}}>
          <Divider/>
          <ProsList />
          <Divider/>
        </Grid>
        <Grid item>
          <PageNav />
        </Grid>
       </Grid>
    );
  }
}
