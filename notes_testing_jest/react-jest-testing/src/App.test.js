import React from "react";
// import ReactDOM from "react-dom"; use enzyme instead
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
});

test("button renders to screen", () => {
  const wrapper = shallow(<App />);
  const buttons = wrapper.find("[data-test='button']");
  expect(buttons.length).toBe(1);
});

test("count state starts at 0", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state("count")).toBe(0);
});

test("clicking button increment states", () => {
  const wrapper = shallow(<App />);
  const originalCount = wrapper.state("count");
  wrapper.find("[data-test='button']").simulate("click");

  expect(wrapper.state("count")).toBe(originalCount + 1);
});
