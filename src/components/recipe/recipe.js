import React, { useEffect } from 'react';
import { P1, P1Bold, Title } from '../../styles/typeStyles';
import { Link } from 'react-router-dom';
import Nav from '../nav/nav';
import { getDrinkById } from '../../actions/drinkAction';
import { connect } from 'react-redux';
import { SITE_RED } from '../../styles/colors';
import { OrderedList, UnorderedList } from '../../styles/globalElements';
import { ImageContainer, DrinkImage } from './styled';

const Recipe = ({ selectedDrink, getDrinkById, isLoading, ...props }) => {
    const { drinkId } = props.match.params;

    useEffect(() => {
        if (drinkId) {
            getDrinkById(drinkId);
        }
    }, [drinkId, getDrinkById]);

    return (
        <div className='container'>
            <Nav />

            {isLoading && !selectedDrink ? (
                <P1>Searching ... </P1>
            ) : (
                <div>
                    <Title className='mb-4' static>
                        {selectedDrink.drinkName}
                    </Title>
                    <p>
                        Created By:
                        <Link to={`/profile/${selectedDrink.creatorId}`}>
                            {selectedDrink.creatorUsername}
                        </Link>
                    </p>
                    <div className='d-block d-sm-flex'>
                        <div className='col-12 col-sm-3'>
                            <P1Bold color={SITE_RED}>Ingredients</P1Bold>
                            <UnorderedList>
                                {selectedDrink.ingredients &&
                                    selectedDrink.ingredients.map((ingredient, i) => {
                                        return (
                                            <li key={i}>
                                                <P1>
                                                    {ingredient.amount} of {ingredient.name}
                                                </P1>
                                            </li>
                                        );
                                    })}
                            </UnorderedList>
                        </div>
                        <div className='col-12 col-sm-3'>
                            <P1Bold color={SITE_RED}>Steps</P1Bold>
                            <OrderedList>
                                {selectedDrink.steps &&
                                    selectedDrink.steps.map((step, i) => {
                                        return (
                                            <li key={i}>
                                                <P1>{step.instructions}</P1>
                                            </li>
                                        );
                                    })}
                            </OrderedList>
                        </div>
                        <ImageContainer className='d-none d-sm-flex col-5'>
                            <DrinkImage src={selectedDrink.imageUrl} />
                        </ImageContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    drinks: state.drinkReducer.drinks,
    selectedDrink: state.drinkReducer.selectedDrink,
    isLoading: state.drinkReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getDrinkById: (drinkId) => getDrinkById(dispatch, drinkId),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
