import { HouseContainer, mapStateToProps } from "./HouseContainer.jsx";
import { shallow } from "enzyme";
import React from "react";

describe(HouseContainer, () => {
  let wrapper, mockData, mockSubmit;
  beforeEach(() => {
    mockData = [
      {
        id: "1",
        name: "Kayla",
        mascot: "Bengal",
        headOfHouse: "Klio Pold",
        school: "Turing",
        houseGhost: "Dobby",
        founder: "Sergio"
      }
    ];

    mockSubmit = jest.fn();

    wrapper = shallow(<HouseContainer houses={mockData} />);
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
  it("should return an object with a house array", () => {
    const mockState = {
      houses: "Apartment complex",
      type: "SET_HOUSES"
    };
    const expected = {
      houses: "Apartment complex"
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
