import React, { Component} from 'react';
import Box from '@material-ui/core/Box'
import Carousel from 'react-material-ui-carousel'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MaintenanceSection from '../maintenance_section'

const Item = ({item: {source, text, title}}) => {
  const fullScreenImageStyle = {
    backgroundImage: `url("bg3.png")`,
    height: '50vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  };

  const imgContainerStyle = {
    width: "100%",
    height: "50vh",
    backgroundImage: `url(${source})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  }

  return (
  <Grid style={fullScreenImageStyle} container justify="center" alignItems="center">
    <Grid item xs={4}>
        <div style={{...imgContainerStyle}}/>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="h3" component="h2" style={{color: 'white', padding: "30px", fontWeight: "700"}}>
        {title}
      </Typography>
      <Box display={{ xs: 'none', md: 'block' }}>
        <Typography
          variant="body2"
          component="div"
          style={{color: 'white', padding: "30px", fontWeight: "500", overflow: 'hidden'}}>
          {text}
        </Typography>
      </Box>
    </Grid>
  </Grid>
  );
}

export default class WhyChooseUsPage extends Component {
  render(){
    const items = [
      {
        source: "optimal_paint_reservoir.JPG",
        title: "Optimal paint reservoir",
        text: `An Optimal paint reservoir is very important for the painting experience, a large reservoir would take up more paint and might cause paint leak from the paintbrushes and shorter reservoir would end up with reduced stroke length. Paintmate paintbrushes are handcrafted with the correct reservoir does not allow to hold more paint and helps get maximum paint out and stroke length.`
      },
      {
        source: "triangular_packaging.jpeg",
        title: "Triangular Packaging",
        text: `Standard box packaging risks damage of the bristles and risks reduced performance during painting. Triangular packaging ensures all the bristles are firmly packed and provide smooth edges for those tricky corners and a knife edge finish. This type of packing further enhances the performance of the brushes to give the painter an excellent painting experience`
      },
      {
        source: "handle_design.JPG",
        title: "Comfortable Handle design",
        text: `Paintmate handcrafted paint brushes are fitted with handcrafted wood handle which are specially designed to reduce hand pain and provide comfortable painting experience. Every handle is custom fitted and polished using sand paper for a smooth grip and double varnish coated for the glossy finish. This comfortable wood handle design ensures smooth strokes and no hand pain`
      },
      {
        source: "tipped_and_flagged.JPG",
        title: "Tipped and Flagged monofilaments",
        text: `The filaments are tipped which means sliced up with blades and flagged which means rubbed against stones to provide much higher paint pick up and release. These filaments are then mixed to the correct ratio to replicate hog hair paint brush performance. Tipped and flagged filaments ensures best result and provide unmatched performance for any painter thereby gives an enjoyable painting experience`
      }
    ];
    return (
      <Box style={{ height: '100%' }}>
        <Carousel navButtonsAlwaysVisible>
          { items.map( (item, i) => <Item item={item} key={i}/> )}
        </Carousel>
        <MaintenanceSection />
      </Box>
    );
  }
}
