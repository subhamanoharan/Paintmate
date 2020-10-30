import React, { Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class BackImage extends Component {

  render(){
    const {source, text, color='white'} = this.props;
    return (
      <Grid style={{
        background: `transparent url(${source}) center no-repeat`,
        height: "50vh",
        backgroundSize: "cover"
      }} container alignItems="center" justify="flex-end">
        <Grid item>
          <Typography variant="h3" component="h2" style={{color: color, padding: "30px", fontWeight: "700"}}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
