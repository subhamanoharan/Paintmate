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

const Content = ({text: {title, description, type, handle, sizes}}) => (
  <div>
    <Typography gutterBottom variant="h5" component="h2">
      {title}
    </Typography>
    <Typography variant="body2" component="p">
      {description}
    </Typography>
    <Typography variant="body2" component="div">
      <Box fontWeight='fontWeightBold' display='inline'>Type: </Box>{type}
    </Typography>
    <Typography variant="body2" component="div">
      <Box fontWeight='fontWeightBold' display='inline'>Handle: </Box>{handle}
    </Typography>
    <Typography variant="body2" component="div">
      <Box fontWeight='fontWeightBold' display='inline'>Sizes: </Box>{sizes.join()}
    </Typography>
  </div>
);

const Media = ({src}) => (
  <CardMedia
    component="img"
    alt="Brush Collection"
    height="180"
    image={src}
    title="Brush Collection"
  />
);

export default class ProductCard extends Component {
  render(){
      const {data: {text, src}, index} = this.props;
      return (
        <Card raised={true} style={{margin: '50px'}}>
          <CardActionArea>
            <CardContent>
              <Grid container spacing={2} direction={(index%2 === 0) ? "row" : "row-reverse"}>
                <Grid item xs={6}><Content text={text}/></Grid>
                <Grid item xs={6}><Media src={src}/></Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small">
              Buy Now
            </Button>
          </CardActions>
        </Card>
      );
  }
}
