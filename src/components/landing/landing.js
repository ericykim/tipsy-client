import React from "react";
import { H1, H2 } from "../../styles/typeStyles";
import Nav from "../nav/nav";
import Recipe from "../recipe/recipe";
import { SearchContainer } from "./styled";
import {Link} from "react-router-dom"



const Landing = () => {

  const drinks = [
    {title: 'margarita'},
    {title: 'gin + tonic'},
    {title: 'tequila seltzer'},
    {title: 'basil mojitarita'},
    {title: 'sangria'},
  ]
  return (
    <div className="container">
        <Nav />
        <H2 className="mb-4">search</H2>
        <SearchContainer>
            <input
            className="form-control col-6  mr-3"
            id="search"
            placeholder="Find a drink................."
            type="text"
          />
          <button className="btn btn-success col-2">Search</button>
        </SearchContainer>
        <div>
          {drinks.map((drink, i) => {
            
            return <H1 key={i} title={drink.title}>{drink.title}</H1>
          })}
        </div>
        <div>
            <Link to="/recipe">Here is the recipe template</Link>
        </div>
    </div>
  );
};

export default Landing;
