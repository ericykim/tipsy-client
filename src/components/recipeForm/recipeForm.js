import React, { useEffect, useState } from "react";
import { P1, SmallText } from "../../styles/typeStyles";
import { useHistory } from "react-router-dom";
import {
  FormInput,
  StyledButton,
  UnorderedList,
  ListItem,
} from "../../styles/globalElements";
import Nav from "../nav/nav";
import drinkService from "../../services/drinkService";
import { connect } from "react-redux";
import { GREEN, SITE_RED } from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getDrinkById } from "../../actions/drinkAction";

const RecipeForm = ({ selectedDrink, getDrinkById, isLoading, ...props }) => {
  const { drinkId } = props.match.params;
  const history = useHistory();

  // Form states
  const [drinkName, setDrinkName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [newIngredient, setNewIngreident] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newStep, setNewStep] = useState("");
  const [inValid, setInValid] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (drinkId) {
      getDrinkById(drinkId);
    }
  }, [drinkId, getDrinkById]);

  // populate form if editing an existing drink
  useEffect(() => {
    if (drinkId && selectedDrink) {
      setDrinkName(selectedDrink.drinkName);
      setImageURL(selectedDrink.imageUrl);
      setIngredients(selectedDrink.ingredients);
      setSteps(selectedDrink.steps);
      setIsEditing(true);
    }
  }, [drinkId, selectedDrink]);

  // edit local lists
  const removeIngredient = (ingredient) => {
    const filteredList = ingredients.filter((i) => i !== ingredient);
    setIngredients(filteredList);
  };

  const removeStep = (step) => {
    const filteredList = steps.filter((s) => s !== step);
    setSteps(filteredList);
  };

  const create = () => {
    if (drinkName === "") {
      setInValid(true);
    } else {
      setInValid(false);
      const drink = {
        drinkName: drinkName,
        imageURL: imageURL,
        ingredients: ingredients,
        steps: steps,
      };
      drinkService
        .createDrink(drink)
        .then((drink) => history.push(`/${drink.drinkId}`));
    }
  };

  const update = () => {
    if (drinkName === "") {
      setInValid(true);
    } else {
      setInValid(false);
      selectedDrink.drinkName = drinkName;
      selectedDrink.imageUrl = imageURL;
      selectedDrink.ingredients = ingredients;
      selectedDrink.steps = steps;

      drinkService
        .updateDrink(selectedDrink.drinkId, selectedDrink)
        .then((drink) => history.push(`/${drink.drinkId}`));
    }
  };

  const deleteDrink = () => {
      drinkService
        .deleteDrink(selectedDrink.drinkId)
        history.push('/deleted')
  };

  return (
    <div className="container">
      <Nav />
      <div className="row justify-content-center align-items-center">
        <div className="column col-6 my-5">
          <label>
            <P1 className="mb-0">drink name *</P1>
          </label>
          {inValid && (
            <SmallText color={SITE_RED}>Please add a drink name</SmallText>
          )}
          <FormInput
            value={drinkName || ""}
            onChange={(event) => setDrinkName(event.target.value)}
            className="form-control col-12 mb-3"
            id="drinkName"
            placeholder=""
            type="text"
            required
          />
          <label>
            <P1 className="mb-0">image</P1>
          </label>
          <FormInput
            value={imageURL || ""}
            onChange={(event) => setImageURL(event.target.value)}
            className=" form-control col-12 mb-3"
            id="imageURL"
            placeholder=""
            type="text"
          />
          <label>
            <P1 className="mb-0">ingredients</P1>
          </label>
          <UnorderedList>
            {ingredients &&
              ingredients.map((ingredient, i) => {
                return (
                  <ListItem key={i} className="col-12">
                    <li className="col-10">
                      <P1>
                        {ingredient.amount} of {ingredient.name}
                      </P1>
                    </li>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="ml-5"
                      onClick={() => removeIngredient(ingredient)}
                    />
                  </ListItem>
                );
              })}
          </UnorderedList>
          <div className="d-flex justify-content-between mb-3">
            <FormInput
              value={newAmount || ""}
              onChange={(event) => setNewAmount(event.target.value)}
              className="form-control col-2"
              id="new amount"
              placeholder="amount"
              type="text"
            />
            <FormInput
              value={newIngredient || ""}
              onChange={(event) => setNewIngreident(event.target.value)}
              className="form-control col-7"
              id="newIngredient"
              placeholder="ingredient"
              type="text"
            />
            <StyledButton
              color={GREEN}
              className="col-2"
              type="button"
              onClick={() =>
                setIngredients([
                  ...ingredients,
                  {
                    name: newIngredient,
                    amount: newAmount,
                  },
                ])
              }
            >
              add
            </StyledButton>
          </div>
          <div>
            <label>
              <P1 className="mb-0">steps</P1>
            </label>
            <UnorderedList>
              {steps &&
                steps.map((step, i) => {
                  return (
                    <ListItem key={i} className="col-12">
                      <li className="col-10">
                        <P1>{step.instructions}</P1>
                      </li>
                      <FontAwesomeIcon
                        icon={faTimes}
                        onClick={() => removeStep(step)}
                      />
                    </ListItem>
                  );
                })}
            </UnorderedList>
            <div className="d-flex justify-content-between mb-3">
              <FormInput
                value={newStep || ""}
                onChange={(event) => setNewStep(event.target.value)}
                className="form-control col-9"
                id="newStep"
                placeholder="step"
                type="text"
              />
              <StyledButton
                color={GREEN}
                type="button"
                className="col-2"
                onClick={() =>
                  setSteps([
                    ...steps,
                    {
                      instructions: newStep,
                    },
                  ])
                }
              >
                add
              </StyledButton>
            </div>
          </div>
          {isEditing ? (
            <>
              <StyledButton
                color={GREEN}
                onClick={() => update()}
                className="btn btn-success col-12 my-3"
              >
                <P1>update</P1>
              </StyledButton>
              <StyledButton
                color={SITE_RED}
                onClick={() => deleteDrink()}
                className="btn btn-success col-12 my-3"
              >
                <P1>delete</P1>
              </StyledButton>
            </>
          ) : (
            <StyledButton
              color={GREEN}
              onClick={() => create()}
              className="btn btn-success col-12 my-3"
            >
              <P1>create</P1>
            </StyledButton>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  selectedDrink: state.drinkReducer.selectedDrink,
  isLoading: state.drinkReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDrinkById: (drinkId) => getDrinkById(dispatch, drinkId),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
