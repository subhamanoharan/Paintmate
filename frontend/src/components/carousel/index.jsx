import React, { Component} from 'react';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Carousel from 'react-material-ui-carousel'

import Hero from "../hero";

const Item = ({item: {source, text}}) => (
  <Hero source={source} text={text} />
);

export default class CustomCarousel extends Component {
  render(){
    const items = [
      { source: "All_Brush_Website_1.png", text: "" },
      { source: "homepage.jpg", text: "Committed To Quality. Committed To You." },
      { source: "gift-package-in-hand.jpg", text: "Experience handcrafted excellence" }
    ];

    return (

        <img src='All_Brush_Website_1.png' style={{width: '100%', height: '100%'}} />

        // <Carousel>
        //   { items.map( (item, i) => <Item item={item} key={i}/> )}
        // </Carousel>
    );
  }
}
