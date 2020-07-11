import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

// <img src="brush.jpg" style={{height: "10vh", margin: 'auto', display: 'block'}}/>

const ProItem = (props) => (<Typography align='center'>{props.input}</Typography>);

export default class ProsList extends Component {
  render(){
    const pros = ["20 years of experience", "Quality", "Craftsmanship"];
    return (
      <Grid container alignItems="center" direction="row" justify="center">
        { pros.map((pro) => (<Grid item xs={4}> <ProItem input={pro}/></Grid>)) }
      </Grid>
    );
  }
}
