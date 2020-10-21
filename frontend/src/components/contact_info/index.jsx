import React, { Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';
import MobileIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';

const Line = ({line}) => (<Typography variant="body2">{line}</Typography>)

const BlockWithIcon = ({icon: Icon, children}) => (
  <Grid container>
    <Grid item style={{"align-self": "center"}}> <Icon /> </Grid>
    <Grid item> {children} </Grid>
  </Grid>
);

const Address = (props) => (
  <BlockWithIcon icon={BusinessIcon}>
    <Line line="Paintmate" />
    <Line line="'Ramar Villa'" />
    <Line line="Plot 30" />
    <Line line="Temple View Avenue" />
    <Line line="Ramasamy Nagar" />
    <Line line="Madurai-625014, TamilNadu, India." />
  </BlockWithIcon>
);

const Phone = () => (
  <BlockWithIcon icon={PhoneIcon}>
    <Line line="0452-2311111" />
  </BlockWithIcon>
);

const Mobile = () => (
  <BlockWithIcon icon={MobileIcon}>
    <Line line="9566519384" />
  </BlockWithIcon>
);

const Email = () => (
  <BlockWithIcon icon={EmailIcon}>
    <Line line="manu@ramartech.com" />
  </BlockWithIcon>
);

const ContactInfo = (props) => {
  return (
    <Grid container direction="column">
      <Grid item> <Address /> </Grid>
      <Grid item> <Phone /> </Grid>
      <Grid item> <Mobile /> </Grid>
      <Grid item> <Email /> </Grid>
    </Grid>
  );
}
export default ContactInfo;