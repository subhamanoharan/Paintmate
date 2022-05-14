import React, { Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
export default class BackImage extends Component {

  render(){
    const {source, text} = this.props;

    const heroImageStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${source}")`,
      height: '50vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
    };

    return (
      <Grid style={heroImageStyle} container alignItems="center" justify="flex-start">
        <Grid item>
          <Typography variant="h5" component="h2" style={{color: 'white', padding: "30px", fontWeight: "700"}}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
