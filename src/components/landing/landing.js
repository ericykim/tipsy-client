import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Nav from '../nav/nav';
import { H1, P1 } from '../../styles/typeStyles';
import { SITE_RED } from '../../styles/colors';
import { SearchArrowImg } from '../../styles/globalElements';
import { ListItemGroup, SearchButton, SearchContainer, SearchInput } from './styled';

import searchArrow from '../../assets/SVG/searchArrow.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeatOutline } from '@fortawesome/free-regular-svg-icons';

import { searchDrinkByName } from '../../actions/drinkAction';
import { likeDrink, unlikeDrink } from '../../actions/userAction';
import LoginModal from '../logInModal/loginModal';

const Landing = ({
    userId,
    likeDrink,
    unlikeDrink,
    likedDrinks,
    drinks,
    searchDrinkByName,
    isLoading,
}) => {
    const [searchDrink, setSearchDrink] = useState('');
    const [modal, setModal] = useState(false);

    const setSearchQuery = (event) => {
        setSearchDrink(event.target.value);
    };

    const enterSearch = (e) => {
        if (e.code === 'Enter') {
            searchDrinkByName(searchDrink, 0, 5);
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
        <div className='container'>
            <Nav />
            <SearchContainer>
                <SearchInput
                    onChange={(event) => setSearchQuery(event)}
                    onKeyUp={(e) => enterSearch(e)}
                    value={searchDrink}
                    className='col-12'
                    id='search'
                    placeholder='search'
                    type='text'
                />
                <SearchButton
                    onClick={() => searchDrinkByName(searchDrink, 0, 5)}
                    id='searchButton'
                    className='btn col-2 col-lg-1'
                >
                    <SearchArrowImg src={searchArrow} alt={'tipsy logo'} />
                </SearchButton>
            </SearchContainer>
            {isLoading ? (
                <P1>Searching ... </P1>
            ) : (
                <div>
                    {drinks.map((drink, i) => {
                        return (
                            <ListItemGroup key={i}>
                                <Link to={`/${drink.drinkId}`} style={{ textDecoration: 'none' }}>
                                    <H1 title={drink.drinkName}>{drink.drinkName}</H1>
                                </Link>
                                {likedDrinks.find(
                                    (likedDrink) => likedDrink.drinkId === drink.drinkId,
                                ) ? (
                                    <>
                                        <FontAwesomeIcon
                                            onClick={() => clickToUnlikeButton(drink.drinkId)}
                                            icon={faHeart}
                                            size={'2x'}
                                            color={SITE_RED}
                                            className='d-none d-md-flex'
                                        />
                                        <FontAwesomeIcon
                                            onClick={() => clickToUnlikeButton(drink.drinkId)}
                                            icon={faHeart}
                                            size={'1x'}
                                            color={SITE_RED}
                                            className='d-flex d-md-none'
                                        />
                                    </>
                                ) : (
                                    <>
                                        <FontAwesomeIcon
                                            onClick={() => clickToLikeButton(drink)}
                                            icon={faHeatOutline}
                                            size={'2x'}
                                            color={SITE_RED}
                                            className='d-none d-md-flex'
                                        />
                                        <FontAwesomeIcon
                                            onClick={() => clickToLikeButton(drink)}
                                            icon={faHeatOutline}
                                            size={'1x'}
                                            color={SITE_RED}
                                            className='d-flex d-md-none'
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
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
