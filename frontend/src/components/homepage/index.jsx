import React, { Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Carousel from "../carousel";

export default class HomePage extends Component {

  render(){
    return (
      <div>
        <Carousel />
        <Container>
          <Typography variant="h5" gutterBottom> Welcome to the World of Paintmate </Typography>
          <Typography variant="body1"> From our humble beginnings in a small house with 10 craftsmen, we are now a community that revolutionises the way of making paint brushes.
          For over two decades, our craftsmen have never stopped working, innovating, and reinventing the art of handcrafting paint brushes.
          Each brush is a handcrafted piece of art, designed, shaped, formulated, blended and packed for excellent painting experience.
           </Typography>
         </Container>
      </div>
    );
  }
}
