import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuItem from '../MenuItem';
import { List } from '@material-ui/core';

export default function MenuList({ menuItems, selectedMenuValue }) {
  return (
    <List>
      {menuItems.map(itemProps => <MenuItem {...itemProps} selected={selectedMenuValue === itemProps.value}></MenuItem>)}
    </List>
    
  )
}
