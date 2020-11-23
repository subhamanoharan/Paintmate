import React, { Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import PiIcon from '../PiIcon'

const customMonotypeCorsivaRegularFont = 'Monotype Corsiva Regular';

const monotypeCorsivaRegularFont = {
  fontFamily: customMonotypeCorsivaRegularFont,
  src: `url('./MonotypeCorsiva.ttf') format('ttf')  `
};

export default class CustomAppBar extends Component {

  render(){
    return (
      <AppBar position="static" style={{"boxShadow": "none", background: 'black'}}>
        <Toolbar disableGutters={true} style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <PiIcon />
          <Typography variant="h3" style={{fontFamily: `${customMonotypeCorsivaRegularFont}, Arial`, color: 'white'}}>
            Paintmate
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
