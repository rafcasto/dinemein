import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addArticle} from '../actions/index'
import uuidv1 from 'uuid'
import {Input} from 'mdbreact'


const mapDispatchToProps = dispatch => {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
  };

class ConnectForm extends Component {
    constructor(){
        super();
        this.state = {
            title : ""
        }

        this.handleChange  = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
    }
    render() {
        const {title} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
             
          <Input label="Title"
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />

          
          <Input type="textarea" label="Type your recipe "/>

        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
                </form>
            </div>
        );
    }
}

const Form = connect(null,mapDispatchToProps)(ConnectForm)
export default Form;