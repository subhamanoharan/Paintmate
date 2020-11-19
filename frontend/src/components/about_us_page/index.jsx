import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';

import ContactInfo from "../contact_info";
import Hero from "../hero";

export default class AboutUsPage extends Component {

  render(){
    return (
      <Grid container direction="column">
        <Grid item>
          <Hero source="antique-typewriter.jpg" text="Contact us"/>
        </Grid>
        <Grid item style={{ alignSelf: "center"}}> <ContactInfo /> </Grid>
      </Grid>
    );
  }
}
