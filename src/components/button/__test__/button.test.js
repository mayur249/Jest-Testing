import React from "react";
import ReactDOM from "react-dom";
import Button from "../button";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
const ReactTestRenderer = require('react-test-renderer');

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Click Me" />);
  expect(getByTestId("button")).toHaveTextContent("Click Me");
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Dont Click Me" />);
  expect(getByTestId("button")).toHaveTextContent("Dont Click Me");
});

it("it matches snapshot 1", () => {
  const tree = ReactTestRenderer.create(<Button label="Dont Click Me" />).toJSON();
  expect(tree).toMatchSnapshot()
});

it("it matches snapshot 2", () => {
    const tree = ReactTestRenderer.create(<Button label="Dont Click Me Broo" />).toJSON();
    expect(tree).toMatchSnapshot()
  });
