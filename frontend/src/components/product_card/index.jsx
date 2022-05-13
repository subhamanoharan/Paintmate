import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Carousel from 'react-material-ui-carousel'
import Hero from "../hero";

const Content = ({text: {title, description, type, areas}}) => (
  <div>
    <Typography gutterBottom variant="h5" component="h2">
      {title}
    </Typography>
    <Typography variant="body1" component="p">
      {description}
    </Typography>
    <Typography variant="body1" component="div">
      <Box fontWeight='fontWeightBold' display='inline'>Areas: </Box>
      {areas}
    </Typography>
    <Typography variant="body1" component="div">
      <Box fontWeight='fontWeightBold' display='inline'>Type: </Box>{type}
    </Typography>
  </div>
);

const Item = ({item: {source, text}}) => (
  <Hero source={source} text={text} />
);

const Media = ({items}) => {
  return (
    <Carousel indicators={false} navButtonsAlwaysVisible animation="slide" duration={10}>
      { items.map( (item) => <CardMedia
          component="img"
          alt="Brush Collection"
          image={item}
          height="70%"
          title="Brush Collection"
        />
   )}
    </Carousel>
)};

export default class ProductCard extends Component {
  render(){
      const {data: {text, items, link}, index} = this.props;
      return (
        <Card raised={true} style={{margin: '50px'}}>
          <CardContent style={{backgroundSize: "cover", backgroundImage: "url(bg3.png)", backdropFilter: "opacity(0.1)", "color": "white"}}>
            <Grid container spacing={2} direction={(index%2 === 0) ? "row" : "row-reverse"} alignItems="center">
              <Grid item xs={6}><Content text={text}/></Grid>
              <Grid item xs={6}><Media items={items}/></Grid>
            </Grid>
          </CardContent>
          <CardActionArea>
            <CardActions>
              <Button size="small">
                <a href={link} target="_blank" rel="noopener noreferrer">Buy Now</a>
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      );
  }
}
