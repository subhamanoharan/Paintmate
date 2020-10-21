import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';

import ContactInfo from "../contact_info";

export default class AboutUsPage extends Component {

  render(){
    return (
      <Grid container direction="column">
        <Grid item>
          <img src="contact_us.jpg" style={{width: "100%", height: "30vh"}}/>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <ContactInfo />
          </Grid>
          <Grid item>
          <h2> Map </h2>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
