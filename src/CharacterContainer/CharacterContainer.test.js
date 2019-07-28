import { CharacterContainer, mapStateToProps } from "./CharacterContainer.jsx";
import { shallow } from "enzyme";
import React from "react";

describe(CharacterContainer, () => {
  let wrapper, mockData, mockSubmit;
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

    mockSubmit = jest.fn();

    wrapper = shallow(<CharacterContainer characters={mockData} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call setState on filtered", () => {
    const mockEvent = {
      target: {
        value: "Kayla"
      }
    };

    const expected = {
      error: "",
      filtered: "Kayla"
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expected);
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
