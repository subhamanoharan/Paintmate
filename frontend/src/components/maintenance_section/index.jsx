import React, { Component} from 'react';
import Box from '@material-ui/core/Box'
import Carousel from 'react-material-ui-carousel'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

export default class MaintenanceSection extends Component {
  render(){
    return (
      <>
        <Typography variant="h3" component="h2" align="center">
          Maintenance
        </Typography>
        <Divider variant="middle" style={{backgroundColor: 'black'}}/>
        <ul>
          <Typography variant="body2"><li>After each water-based activity, clean brushes thoroughly with dish soap and warm—not hot!—water.</li></Typography>
          <Typography variant="body2"><li>Gently work the bristles with your hand until the water flows clean, with the bristles pointing down</li></Typography>
          <Typography variant="body2"><li>After that, give the brush a final wash with soap and water, shake it thoroughly, dry it</li></Typography>
          <Typography variant="body2"><li>Keep it in the sleeve it came in</li></Typography>
          <Typography variant="body2"><li>If you're using oil-based paint, swirl the brush for 30 seconds in a cup of paint or lacquer thinner, then wipe the brush on the cup's side.</li></Typography>
          <Typography variant="body2"><li>You'll probably have to repeat this technique a few times until no paint comes out of the brush</li></Typography>
        </ul>
      </>
    );
  }
}
