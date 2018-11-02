import React, { Component } from 'react';
import List from "./List";
import Form from './Form'
import Menu from './Menu'
import NavbarFeatures from './NavbarFeatures'
class App extends Component {
    render() {
        return (
            <div>
              <NavbarFeatures />
              <br/>
              <br/>
              <br/>
            <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
              
              <List />
            </div>
            <div className="col-md-4 offset-md-1">
              <h2>Add a new article</h2>
              <Form />
            </div>
          </div>
          </div>     
        );
    }
}

export default App;