import React, { Component} from 'react';
import Box from '@material-ui/core/Box'
import Carousel from 'react-material-ui-carousel'

import Hero from "../hero";

const Item = ({item: {source, text}}) => (
  <Hero source={source} text={text} />
);

export default class CustomCarousel extends Component {
  render(){
    const items = [
      { source: "homepage.jpg", text: "Committed To Quality. Committed To You." },
      { source: "gift-package-in-hand.jpg", text: "Experience handcrafted excellence" }
    ];
    return (
        <Carousel>
          { items.map( (item, i) => <Item item={item} key={i}/> )}
        </Carousel>
    );
  }
}
