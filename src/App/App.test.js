import React from "react";
import { shallow, mount } from "enzyme";
import { App } from "./App";
import Error from "../Error/Error";
import { CharacterContainer } from "../CharacterContainer/CharacterContainer";
import { MemoryRouter } from "react-router";
import { Route } from "react-router-dom";
import { setCharacters, setHouses, setSpells } from "../actions/index";
import { mapStateToProps, mapDispatchToProps } from "./App";

describe("App", () => {
  let wrapper, instance, mockFunc;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
    mockFunc = jest.fn();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render home page", () => {
    expect(instance.homePage()).toMatchSnapshot();
  });

  it("should be able to save to state", () => {
    const mockData = {
      error: "Error fetching wizard data",
      favorites: []
    };
    expect(wrapper.state()).toEqual(mockData);
  });

  it("should save to localStorage", () => {
    jest.spyOn(window.localStorage.__proto__, "setItem");
    window.localStorage.__proto__.setItem = jest.fn();

    window.localStorage.__proto__.setItem();
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it("should redirect to 404", () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/random"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(instance.homePage())).toHaveLength(0);
  });

  it("should redirect CharacterContainer to 404", () => {
    const mockProps = [
      {
        name: "unknown"
      }
    ];
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/random"]} initialIndex={0}>
        <App />
      </MemoryRouter>
    );
    expect(
      wrapper.find(
        <CharacterContainer data={mockProps} favoriteCard={mockFunc} />
      )
    ).toHaveLength(0);
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
