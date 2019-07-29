import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { setCharacters, setHouses, setSpells } from "../actions/index";
import { mapStateToProps, mapDispatchToProps } from "./App";

describe("App", () => {
  let wrapper, instance, store;

  beforeEach(() => {
    store = 
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render home page", () => {
    expect(instance.homePage()).toMatchSnapshot();
  });
});

describe("mapDispatchToProps", () => {
  it("calls dispatch with a setCharacters action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setCharacters("Kayla");
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.setCharacters("Kayla");
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("calls dispatch with a setHouses action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setHouses("Slytherin");
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.setHouses("Slytherin");
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("calls dispatch with a setSpells action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setSpells("Accio");
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.setSpells("Accio");
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe("mapStateToProps", () => {
  it("should return an object with a characters array", () => {
    const mockState = {
      characters: "Kayla",
      type: "SET_CHARACTERS"
    };
    const expected = {
      characters: "Kayla"
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it("should return an object with a houses array", () => {
    const mockState = {
      houses: "Slytherin",
      type: "SET_HOUSES"
    };
    const expected = {
      houses: "Slytherin"
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it("should return an object with a spells array", () => {
    const mockState = {
      spells: "Accio",
      type: "SET_SPELS"
    };
    const expected = {
      spells: "Accio"
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
