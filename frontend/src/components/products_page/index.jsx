import React, { Component} from 'react';

import ProductCard from "../product_card";
import Hero from "../hero";

export default class ProductsPage extends Component {

  render(){
    const productData = [
      {
        text: {
          title: "Basic",
          description: "A straightforward selection of basic yet reliable decorating tools that help get the job done in a quick and easy way. Offering excellent value for money, it gives DIY-ers everything they need on a budget.",
          type: `Interior baseboards, crown moldings or stairs, Interior ceilings, Interior doors and door frames, Interior walls, Interior window frames, Latex based paints, Oil based paints`,
          handle:  'Fluted',
          sizes:  ['2"', '1.5"']
        },
        src: "brushpng.png"
      },
      {
        text: {
          title: "Intermediate",
          description: "Our middle range that offers quality brushes, rollers and tools that perform well without too much effort.",
          type: `Interior baseboards, crown moldings or stairs, Interior ceilings, Interior doors and door frames, Interior walls, Interior window frames, Latex based paints, Oil based paints`,
          handle:  'Fluted',
          sizes:  ['2"']
        },
        src: "brush-inter.jpg"
      },
      {
        text: {
          title: "Advanced",
          description: "Superior in quality, look and feel, this is our ‘best’ range. It combines innovative materials to produce an excellent finish while making decorating easier.",
          type: `Interior baseboards, crown moldings or stairs, Interior ceilings, Interior doors and door frames, Interior walls, Interior window frames, Latex based paints, Oil based paints`,
          handle:  'Beaver Tailed',
          sizes:  ['2"', '1.5"']
        },
        src: "brush-advanced.jpg"
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
