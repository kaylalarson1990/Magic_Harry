import { CharacterContainer, mapStateToProps } from "./CharacterContainer.jsx";
import { shallow } from "enzyme";
import React from "react";

describe(CharacterContainer, () => {
  let wrapper, mockData, mockSubmit, instance, mockFunc;
  let event = {
    preventDefault: jest.fn()
  };
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
    mockFunc = jest.fn();
    wrapper = shallow(<CharacterContainer characters={mockData} />);
    instance = wrapper.instance();
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
      filtered: "Kayla",
      num: 30
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it('should be able to click "show more" button to see more data', () => {
    wrapper.instance().handleClick = jest.fn();
    wrapper.find(".showMoreBtn").simulate("click");
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
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
