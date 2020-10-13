import React, { Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

export default class PageNav extends Component {
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
        <Tabs centered value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
          <Tab label="Item One"  />
          <Tab label="Item Two"  />
          <Tab label="Item Three" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <p>Home</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>Products</p>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <p>Contact Us</p>
        </TabPanel>
      </Grid>
    );
  }
}
