import React, { useState } from "react";
import { H1, P1 } from "../../styles/typeStyles";
import Nav from "../nav/nav";
import { connect } from "react-redux";
import {
  ListItemGroup,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./styled";
import searchArrow from "../../assets/SVG/searchArrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { SITE_RED } from "../../styles/colors";

import { searchDrinkByName } from "../../actions/drinkAction";
import { SearchArrowImg } from "../../styles/globalElements";

const Landing = ({ drinks, searchDrinkByName, isLoading }) => {
  const [searchDrink, setSearchDrink] = useState("");

  const setSearchQuery = (event) => {
    setSearchDrink(event.target.value);
  };

  const enterSearch = (e) => {
    if (e.code === "Enter") {
      searchDrinkByName(searchDrink, 0, 5);
    }
  };

  return (
    <div className="container">
      <Nav />
      <SearchContainer>
        <SearchInput
          onChange={(event) => setSearchQuery(event)}
          onKeyUp={(e) => enterSearch(e)}
          value={searchDrink}
          className="col-12"
          id="search"
          placeholder="search"
          type="text"
        />
        <SearchButton
          onClick={() => searchDrinkByName(searchDrink, 0, 5)}
          id="searchButton"
          className="btn col-2 col-lg-1"
        >
          <SearchArrowImg src={searchArrow} alt={"tipsy logo"}/>
        </SearchButton>
      </SearchContainer>
      {isLoading ? (
        <P1>Searching ... </P1>
      ) : (
        <div>
          {drinks.map((drink, i) => {
            return (
              <ListItemGroup
                key={i}
                to={`/${drink.drinkId}`}
                style={{ textDecoration: "none" }}
              >
                <H1 title={drink.drinkName}>{drink.drinkName}</H1>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={"2x"}
                  color={SITE_RED}
                  className="d-none d-md-flex"
                />
                <FontAwesomeIcon
                  icon={faHeart}
                  size={"1x"}
                  color={SITE_RED}
                  className="d-flex d-md-none"
                />
              </ListItemGroup>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  drinks: state.drinkReducer.drinks,
  isLoading: state.drinkReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchDrinkByName: (drinkName, offset, limit) =>
      searchDrinkByName(dispatch, drinkName, offset, limit),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
