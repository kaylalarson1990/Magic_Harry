import {
  CharacterContainer,
  mapStateToProps,
  mapDispatchToProps
} from "./CharacterContainer.jsx";
import { setCharacters } from "../actions/index";
import { shallow } from "enzyme";
import React from "react";

describe(CharacterContainer, () => {
  let wrapper, mockData;
  beforeEach(() => {
    mockData = [
      {
        id: "1",
        name: "Kayla",
        role: "student",
        house: "KlioPold",
        school: "Turing",
        species: "human"
      }
    ];

    wrapper = shallow(<CharacterContainer characters={mockData} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
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
});

describe("mapDispatchToProps", () => {
  it("calls dispatch with a setCharacters action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setCharacters("Kayla");
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.setCharacters("Kayla");
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
