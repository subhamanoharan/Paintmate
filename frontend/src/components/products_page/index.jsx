import React, { Component} from 'react';

import ProductCard from "../product_card";
import Hero from "../hero";

export default class ProductsPage extends Component {

  render(){
    const productData = [
      {
        text: {
          title: "4\" Size",
          description: "Suitable for all kinds of interior wall painting, exterior wall painting DIY wall painting projects, ceiling painting, wall touch up, wall décor paintings",
          areas: `Interior baseboards, crown moldings or stairs, Interior ceilings, Interior doors and door frames, Interior walls, Interior window frames`,
          type: `Oil based paints, Water Based Paints, Varnish`,
        },
        items: [
          "4inch.jpg",
          "4inch_dimen.jpg",
          "4inch_premium.jpg",
          "4inch_tapered.jpg",
          "4inch_lasting.jpg",
        ]
      },
      {
        text: {
          title: "3\" Size",
          description: "Best paintbrush for tricky corners, grill painting, wall touch-ups, décor paintings and DIY projects",
          areas: `Detailing of artwork, woodwork, wall arts, finishing corners, and edge painting`,
          type: `Oil based paints, Water Based Paints, Varnish`,
        },
        items: [
          "3inchfront.jpg",
          "3inch_dimen.jpg",
          "3inch_premium.jpg",
          "3inch_tapered.jpg",
          "3inch_lasting.jpg",
        ]
      },
      {
        text: {
          title: "2\" Size",
          description: "Best paint brush for detailing, window grill painting, wall touch ups, décor paintings, gate painting and DIY projects",
          areas: `Detailing of artwork, wood work, wall arts, finishing corners, small corner painting and edge painting`,
          type: `Oil based paints, Water Based Paints, Varnish`,
        },
        items: [
          "2inchfront.jpg",
          "2inch_dimen.jpg",
          "2inch_premium.jpg",
          "2inch_tapered.jpg",
          "2inch_lasting.jpg",
        ]
      }
    ];
    return (
      <div>
        <Hero source="paint-brushes-palette-canvas.jpg" text="Find your brush here"/>
        {productData.map((p,i) => (<ProductCard data={p} index={i}/>))}
      </div>
    )
  }
}
