import { SpellContainer, mapStateToProps } from "./SpellContainer.jsx";
import { shallow } from "enzyme";
import React from "react";

describe(SpellContainer, () => {
  let wrapper, mockData, mockSubmit;
  beforeEach(() => {
    mockData = [
      {
        id: "1",
        spell: "Accio",
        type: "Sleeping spell",
        effect: "Puts to sleep on command",
      }
    ];

    mockSubmit = jest.fn();

    wrapper = shallow(<SpellContainer spells={mockData} />);
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
  it("should return an object with a spell array", () => {
    const mockState = {
      spells: "Accio",
      type: "SET_SPELLS"
    };
    const expected = {
      spells: "Accio"
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});