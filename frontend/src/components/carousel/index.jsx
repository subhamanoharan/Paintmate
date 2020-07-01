import React, { Component} from 'react';
import Box from '@material-ui/core/Box'
import Carousel from 'react-material-ui-carousel'

const Item = (props) => {
  return (<img src="brush.jpg" style={{width: "100%", height: "60vh"}}/>)
};

export default class CustomCarousel extends Component {
  render(){
    const items = [
      {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
      },
      {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
      }
    ];
    return (
        <Carousel>
          { items.map( item => <Item item={item} /> )}
        </Carousel>
    );
  }
}
