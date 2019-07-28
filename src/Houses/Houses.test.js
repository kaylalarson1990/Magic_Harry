import React from "react";
import { shallow } from "enzyme";
import Houses from "./Houses";
//... 23,24,25,29,30

describe("Houses", () => {
  let wrapper, mockFunc, instance;
  let event = {
    preventDefault: jest.fn()
  };

  let props = {
    name: "Kayla",
    mascot: "Bengal",
    house: "Apartment",
    school: "Turing",
    id: 1,
    headOfHouse: "Sergio",
    houseGhost: "Klio",
    founder: "Sergio"
  };

  beforeEach(() => {
    mockFunc = jest.fn();
    wrapper = shallow(<Houses {...props} />);
    instance = wrapper.instance();
  });

  it("should match snapshot", () => {
    wrapper.setState({ error: "" });
    expect(wrapper).toMatchSnapshot();
  });

  it("should be able to toggle favorite", () => {
    instance.addFavorite = mockFunc;
    wrapper.find(".favorite-btn").simulate("click");
    expect(instance.addFavorite).not.toHaveBeenCalled();
  });

  it("should set flipped to state", () => {
    expect(wrapper.state("isFlipped")).toEqual(false);
    instance.handleClick(event);
    expect(wrapper.state("isFlipped")).toEqual(true);
  });

  it("should set favorite to state", () => {
    expect(wrapper.state("favorited")).toEqual(false);
    instance.addFavorite();
    expect(wrapper.state("favorited")).toEqual(true);
  });
});
