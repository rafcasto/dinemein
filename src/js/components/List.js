import React from "react";
import {defaultState} from '../actions/index'
import { connect } from "react-redux";



const mapStateToProps = state => {
  const {filterRecepies,articles} = state;
  return { articles: articles,
           localrecepies:filterRecepies
           };
};



const ConnectedList = ({ articles,localrecepies,defaultState }) => (
  <div>

<ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>

  <br/>
  <ul className="list-group list-group-flush">
  
    {localrecepies.map(rep=>(
      <li className="list-group-item" >
      <h1>{
        rep.country
      }</h1>
      </li>
    ))}
  </ul>
  </div>
  
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;