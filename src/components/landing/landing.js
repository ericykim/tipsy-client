import React, { useState } from 'react';
import { H1, H2, P1 } from '../../styles/typeStyles';
import Nav from '../nav/nav';
import { SearchContainer } from './styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { searchDrinkByName } from '../../actions/drinkAction';

const Landing = ({ drinks, searchDrinkByName, isLoading }) => {
    const [searchDrink, setSearchDrink] = useState('');

    const setSearchQuery = (event) => {
        setSearchDrink(event.target.value);
    };

    return (
        <div className='container'>
            <Nav />
            <H2 className='mb-4'>search</H2>
            <SearchContainer>
                <input
                    onChange={(event) => setSearchQuery(event)}
                    value={searchDrink}
                    className='form-control col-6  mr-3'
                    id='search'
                    placeholder='Find a drink'
                    type='text'
                />
                <button
                    onClick={() => searchDrinkByName(searchDrink, 0, 5)}
                    className='btn btn-success col-2'
                >
                    Search
                </button>
            </SearchContainer>
            {isLoading ? (
                <P1>Searching ... </P1>
            ) : (
                <div>
                    {drinks.map((drink, i) => {
                        return (
                            <Link to={`/${drink.drinkId}`} style={{ textDecoration: 'none' }}>
                                <H1 key={i} title={drink.drinkName}>
                                    {drink.drinkName}
                                </H1>
                            </Link>
                        );
                    })}
                </div>
            )}
            <div>
                <Link to='/recipe'>Here is the recipe template</Link>
            </div>
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
