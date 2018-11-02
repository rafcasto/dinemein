import React, { Component } from 'react';
import Flag from "react-flags"
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';



import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


    

const mapStateToProps = state => {
    return {menu:state.menu}
}

const ConnectedMenu = ({menu}) => (
    <div>
         <ul>
            </ul>
    <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler />
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>
              
             
              {menu.map(el =>(
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret key={el.id}>
                {el.continent}
            </DropdownToggle>
            <DropdownMenu right>
                {el.countries.map(sub =>(
                    <DropdownItem>
                         <Flag
                         basePath="/img/flags"
          name={sub.code}
          format="png"
          pngSize={32}
          shiny={true}
          alt={sub.country + " flag"}
        />
                    {sub.country}
                  </DropdownItem>
                ))}
            </DropdownMenu>
                  </UncontrolledDropdown>
            
        ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
   
);

const Menu = connect(mapStateToProps)(ConnectedMenu)
export default Menu;