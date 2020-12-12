import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history'

import Nav from "../nav/nav";
import { H1, H4, P1, P2 } from "../../styles/typeStyles";
import { SITE_RED } from "../../styles/colors";
import { SearchArrowImg } from "../../styles/globalElements";
import {
  Intro,
  ListItemGroup,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./styled";

import searchArrow from "../../assets/SVG/searchArrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeatOutline } from "@fortawesome/free-regular-svg-icons";

import { searchDrinkByName, clearDrinkSearch } from '../../actions/drinkAction';
import { likeDrink, unlikeDrink } from '../../actions/userAction';
import LoginModal from '../logInModal/loginModal';

const Landing = ({
    userId,
    likeDrink,
    unlikeDrink,
    likedDrinks,
    drinks,
    searchDrinkByName,
    clearDrinkSearch,
    isLoading,
    ...props
}) => {
  const [searchDrink, setSearchDrink] = useState("");
  const [modal, setModal] = useState(false);

    useEffect(() => {
        //we could use a library, but for one query param it's not worth it
        const queryParam = props.location.search.split('=');
        if (queryParam[1] === undefined) {
            setSearchDrink('');
            clearDrinkSearch();
        } else {
            const drinkName = queryParam[1];
            setSearchDrink(queryParam[1]);
            searchDrinkByName(searchDrink, 0, 10);
        }
    }, [props.location.search]);

    const setSearchQuery = (event) => {
        setSearchDrink(event.target.value);
    };

    const searchForDrink = () => {
        searchDrinkByName(searchDrink, 0, 10);
        history.push(`/search?drinkname=${searchDrink}`);
    };

    const enterSearch = (e) => {
        if (e.code === 'Enter') {
            searchForDrink();
        }
    };

  const toggle = () => setModal(!modal);

  const clickToLikeButton = (drink) => {
    userId ? likeDrink(userId, drink) : toggle();
  };

  const clickToUnlikeButton = (drinkId) => {
    userId ? unlikeDrink(userId, drinkId) : toggle();
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
          onClick={() => searchForDrink()}
          id="searchButton"
          className="btn col-2 col-lg-1"
        >
          <SearchArrowImg src={searchArrow} alt={"tipsy logo"} />
        </SearchButton>
      </SearchContainer>
      {(drinks.length === 0 && !isLoading) && (
        <Intro>
          <div className="mb-4">
            <H4>Welcome to Tipsy!</H4>
            <P2 color={SITE_RED}>the cocktail encyclopedia</P2>
          </div>
          <div>
            <P1>
              Seach a drink from the curation of classics and our Bartender's
              originals. Have a unqiue drink of your own? Sign up to start
              sharing your creation.
            </P1>
          </div>
        </Intro>
      )}
      {isLoading ? (
        <P1>Searching ... </P1>
      ) : (
        <div>
          {drinks.map((drink, i) => {
            return (
              <ListItemGroup key={i}>
                <Link
                  to={`/${drink.drinkId}`}
                  style={{ textDecoration: "none" }}
                >
                  <H1 title={drink.drinkName}>{drink.drinkName}</H1>
                </Link>
                {userId && likedDrinks.find(
                  (likedDrink) => likedDrink.drinkId === drink.drinkId
                ) ? (
                  <>
                    <FontAwesomeIcon
                      onClick={() => clickToUnlikeButton(drink.drinkId)}
                      icon={faHeart}
                      size={"2x"}
                      color={SITE_RED}
                      className="d-none d-md-flex"
                    />
                    <FontAwesomeIcon
                      onClick={() => clickToUnlikeButton(drink.drinkId)}
                      icon={faHeart}
                      size={"1x"}
                      color={SITE_RED}
                      className="d-flex d-md-none"
                    />
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon
                      onClick={() => clickToLikeButton(drink)}
                      icon={faHeatOutline}
                      size={"2x"}
                      color={SITE_RED}
                      className="d-none d-md-flex"
                    />
                    <FontAwesomeIcon
                      onClick={() => clickToLikeButton(drink)}
                      icon={faHeatOutline}
                      size={"1x"}
                      color={SITE_RED}
                      className="d-flex d-md-none"
                    />
                  </>
                )}
              </ListItemGroup>
            );
          })}
        </div>
      )}
      <LoginModal modal={modal} toggle={toggle} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  drinks: state.drinkReducer.drinks,
  userId: state.userReducer.profile.id,
  isLoading: state.drinkReducer.isLoading,
  likedDrinks: state.userReducer.profile.likedDrinks,
});

const mapDispatchToProps = (dispatch) => {
    return {
        searchDrinkByName: (drinkName, offset, limit) =>
            searchDrinkByName(dispatch, drinkName, offset, limit),
        likeDrink: (userId, drink) => likeDrink(dispatch, userId, drink),
        unlikeDrink: (userId, drinkId) => unlikeDrink(dispatch, userId, drinkId),
        clearDrinkSearch: () => clearDrinkSearch(dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
