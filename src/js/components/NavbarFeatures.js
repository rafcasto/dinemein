import React, { Component } from 'react';
import {searchByCountry,showAll} from '../actions/index'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Flag from "react-flags"
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {menu:state.menu}
}

const mapDispatchToProps = dispatch => {
    return {
        searchByCountry: recepies => dispatch(searchByCountry(recepies)),
        showAll:recepies => dispatch(showAll(recepies))
    };
  };

class NavbarConnectedFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            collapse: false,
            isWideEnough: false,
            menu:props.menu

        };
    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.props.showAll({});
        this.props.searchByCountry({ "country":event.target.id});
        
    }



    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        const {menu} = this.state;
        
        return (
            <Router>
                <Navbar light color="blue-grey lighten-5" expand="lg" fixed="top" scrolling>
                    <NavbarBrand href="/">
                        <strong>HOME</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                        {menu.map(el =>(
                          <NavItem>
                              <Dropdown>
                                <DropdownToggle nav caret>{el.continent}</DropdownToggle>
                                <DropdownMenu>
                                  
                                    {el.countries.map(sub =>(
                    <DropdownItem id={sub.country}  onClick={this.handleClick}>
                         <Flag
                        className="flag_padding "
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
                            </Dropdown>
                          </NavItem>  
                        ))}
                          
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white"  type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

const NavbarFeatures = connect(mapStateToProps,mapDispatchToProps)(NavbarConnectedFeatures)

export default NavbarFeatures;