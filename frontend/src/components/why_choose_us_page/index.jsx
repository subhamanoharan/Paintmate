import React, { Component} from 'react';
import Box from '@material-ui/core/Box'
import Carousel from 'react-material-ui-carousel'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Item = ({item: {source, text, title}}) => {
  const fullScreenImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
    height: '80vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  };
  return (
  <Grid style={fullScreenImageStyle} container alignItems="center" justify="center">
    <Grid item xs={6}>
      <img style={{height: '80vh', width: '50%'}}src={source}/>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="h3" component="h2" style={{color: 'white', padding: "30px", fontWeight: "700"}}>
        {title}
      </Typography>
      <Typography variant="subtitle2" component="div" style={{color: 'white', padding: "30px", fontWeight: "500"}}>
        {text}
      </Typography>
    </Grid>
  </Grid>
  );
}

export default class WhyChooseUsPage extends Component {
  render(){
    const items = [
      {
        source: "optimal_paint_reservoir.jpeg",
        title: "Optimal paint reservoir",
        text: `An Optimal paint reservoir is very important for the painting experience, a large reservoir would take up more paint and might cause paint leak from the paintbrushes and shorter reservoir would end up with reduced stroke length. Paintmate paintbrushes are handcrafted with the correct reservoir does not allow to hold more paint and helps get maximum paint out and stroke length.`
      },
      {
        source: "triangular_packaging.jpeg",
        title: "Triangular Packaging",
        text: `Standard box packaging risks damage of the bristles and risks reduced performance during painting. Triangular packaging ensures all the bristles are firmly packed and provide smooth edges for those tricky corners and a knife edge finish. This type of packing further enhances the performance of the brushes to give the painter an excellent painting experience`
      },
      // { source: "gift-package-in-hand.jpg", text: "Experience handcrafted excellence" }
    ];
    return (
      <Box style={{ height: '100%' }}>
        <Carousel indicators={false} navButtonsAlwaysVisible>
          { items.map( (item, i) => <Item item={item} key={i}/> )}
        </Carousel>
      </Box>
    );
  }
}
