import React, { Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import HomePage from "../homepage";
import ProductsPage from "../products_page";
import WhyChooseUsPage from "../why_choose_us_page";
import AboutUsPage from "../about_us_page";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (children)}
    </div>
  );
}

export default class PageTabNav extends Component {
  constructor(props){
    super(props);
    this.state = {value: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({value: newValue});
  }

  render(){
    const {value} = this.state;
    return (
      <Grid item sm >
        <Tabs centered value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example" style={{background: "#ffffff"}}>
          <Tab label="Home"  />
          <Tab label="Products"  />
          <Tab label="Why Choose Paintmate"  />
          <Tab label="About Us" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <HomePage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProductsPage />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <WhyChooseUsPage />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AboutUsPage />
        </TabPanel>
      </Grid>
    );
  }
}
