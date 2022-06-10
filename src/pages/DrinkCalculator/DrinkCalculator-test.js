import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import DrinkCalculator from "../DrinkCalculator";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import configureMockStore from "redux-mock-store";

import "i18n";

const mockStore = configureMockStore();
const store = mockStore({
  questionnaire: {
    questions: [],
    response: [
      {
        question: "one",
        value: null
      },
      {
        question: "two",
        value: null
      },
      {
        question: "three",
        value: null
      },
      {
        question: "four",
        value: null
      },
      {
        question: "five",
        value: 162 // default to UK average height in cm
      },
      {
        question: "six",
        value: null
      }
    ],
    currentSection: 0,
    hasStarted: false
  }
});

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("DrinkCalculator Renders Elements Correctly", async () => {
  const history = createMemoryHistory();

  act(() => {
    render(
      <Router history={history}>
        <Provider store={store}>
          <DrinkCalculator />
        </Provider>
      </Router>,

      container
    );
  });
  const title = container.querySelector("[data-testid='title'");
  const resultsTitle = container.querySelector("[data-testid='results-title'");
  const viewTotalButton = container.querySelector("[data-testid='view-total-button'");

  expect(title.nodeName).toBe("H2");
  expect(resultsTitle).toBe(null);
  expect(viewTotalButton).toBe(null);
});

it("DrinkCalculator Results Renders Elements Correctly", async () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Provider store={store}>
        <DrinkCalculator />
      </Provider>
    </Router>,

    container
  );

  let viewTotalButton = container.querySelector("[data-testid='view-total-button'");
  let calculateButton = container.querySelector("[data-testid='calculate-button'");
  const addDrinkButton = screen.getAllByTestId("drink-card-button");
  const calculateButtonEvent = screen.getByTestId("calculate-button");
  expect(viewTotalButton).toBe(null);
  expect(calculateButton.disabled).toBe(true);

  fireEvent.click(addDrinkButton[0]);
  viewTotalButton = container.querySelector("[data-testid='view-total-button'");
  calculateButton = container.querySelector("[data-testid='calculate-button'");

  expect(calculateButton.disabled).toBe(false);
  expect(viewTotalButton.nodeName).toBe("BUTTON");

  fireEvent.click(calculateButtonEvent);

  const title = container.querySelector("[data-testid='title'");
  const unitTotal = container.querySelector("[data-testid='unit-total'");
  const kcalTotal = container.querySelector("[data-testid='kcal-total'");
  const sugarTotal = container.querySelector("[data-testid='sugar-total'");
  const resultsTitle = container.querySelector("[data-testid='results-title'");

  expect(resultsTitle.nodeName).toBe("H2");
  expect(unitTotal).toHaveTextContent("2.3");
  expect(kcalTotal).toHaveTextContent("227 kcal");
  expect(sugarTotal).toHaveTextContent("9 teaspoons of sugar");
  expect(title).toBe(null);
});

it("DrinkCalculator Results Renders Elements Correctly When Multiple Drinks Are Added", async () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Provider store={store}>
        <DrinkCalculator />
      </Provider>
    </Router>,

    container
  );

  let viewTotalButton = container.querySelector("[data-testid='view-total-button'");
  let calculateButton = container.querySelector("[data-testid='calculate-button'");
  const addDrinkButton = screen.getAllByTestId("drink-card-button");
  const calculateButtonEvent = screen.getByTestId("calculate-button");
  expect(viewTotalButton).toBe(null);
  expect(calculateButton.disabled).toBe(true);

  fireEvent.click(addDrinkButton[0]);
  fireEvent.click(addDrinkButton[1]);
  fireEvent.click(addDrinkButton[2]);
  fireEvent.click(addDrinkButton[3]);
  viewTotalButton = container.querySelector("[data-testid='view-total-button'");
  calculateButton = container.querySelector("[data-testid='calculate-button'");

  expect(calculateButton.disabled).toBe(false);
  expect(viewTotalButton.nodeName).toBe("BUTTON");

  fireEvent.click(calculateButtonEvent);

  const title = container.querySelector("[data-testid='title'");
  const unitTotal = container.querySelector("[data-testid='unit-total'");
  const kcalTotal = container.querySelector("[data-testid='kcal-total'");
  const sugarTotal = container.querySelector("[data-testid='sugar-total'");
  const resultsTitle = container.querySelector("[data-testid='results-title'");

  expect(resultsTitle.nodeName).toBe("H2");
  expect(unitTotal).toHaveTextContent("11.8");
  expect(kcalTotal).toHaveTextContent("1068 kcal");
  expect(sugarTotal).toHaveTextContent("43 teaspoons of sugar");
  expect(title).toBe(null);
});
