import React, { Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
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
      <AppBar position="static" style={{"boxShadow": "none", background: '#212121'}}>
        <Box style={{ margin: 'auto' }}>
          <img src="Paintmate_Logo_Test8.png" style={{height: '10vh'}}/>
        </Box>
      </AppBar>
    );
  }
}
