import React, { useState } from "react";
import { P1, SmallText } from "../../styles/typeStyles";
import { Link, useHistory } from "react-router-dom";
import {
  FormInput,
  StyledButton,
  StyledSelect,
  Logo,
  LogoContainer,
  UnorderedList,
} from "../../styles/globalElements";
import userService from "../../services/userService";
import Nav from "../nav/nav";
import drinkService, { createDrink } from "../../services/drinkService";
import { connect } from "react-redux";
import { GREEN, SITE_RED } from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ListItem } from "./styled";

const RecipeForm = () => {
  const [drinkName, setDrinkName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngreident] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newStep, setNewStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [inValid, setInValid] = useState(false);

  const history = useHistory();

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
      drinkService.createDrink(drink).then((drink) => history.push(`/${drink.drinkId}`));

    }
  };

  const removeIngredient = (ingredient) => {
    const filteredList = ingredients.filter((i) => i !== ingredient)
    setIngredients(filteredList);
  }

  const removeStep = (step) => {
    const filteredList = steps.filter((s) => s !== step)
    setSteps(filteredList);
  }

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
            value={drinkName}
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
            value={imageURL}
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
                    <P1>
                      {ingredient.amount} of {ingredient.name} <FontAwesomeIcon icon={faTimes} className="ml-5" onClick={() => removeIngredient(ingredient)}/>
                    </P1>
                  </ListItem>
                );
              })}
          </UnorderedList>
          <div className="d-flex justify-content-between mb-3">
            <FormInput
              value={newAmount}
              onChange={(event) => setNewAmount(event.target.value)}
              className="form-control col-2"
              id="new amount"
              placeholder="amount"
              type="text"
            />
            <FormInput
              value={newIngredient}
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
                    <ListItem key={i}>
                      <P1>{step.instructions}</P1> <FontAwesomeIcon icon={faTimes} onClick={() => removeStep(step)}/>
                    </ListItem>
                  );
                })}
            </UnorderedList>
            <div className="d-flex justify-content-between mb-3">
              <FormInput
                value={newStep}
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

          <StyledButton
            color={GREEN}
            onClick={() => create()}
            className="btn btn-success col-12 my-3"
          >
            <P1>create</P1>
          </StyledButton>
          <SmallText>* required</SmallText>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;
