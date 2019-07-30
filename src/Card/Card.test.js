import React from "react";
import { shallow } from "enzyme";
import Card from "./Card.jsx";

describe("Card", () => {
  let mockFunc, mockData, instance, wrapper;
  let event = {
    preventDefault: jest.fn()
  }

  beforeEach(() => {
    mockFunc = jest.fn();
    mockData = {
      name: "Kayla",
      id: "1",
      role: "Student",
      house: "Apartment",
      school: "Turing",
      species: "Human"
    };
    wrapper = shallow(<Card info={mockData} favoriteCard={mockFunc} />);

    instance = wrapper.instance()
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should set isFlipped state", () => {
    const wrapper = shallow(<Card info={mockData} favoriteCard={mockFunc} />);

    expect(wrapper.state('isFlipped')).toEqual(false)
    instance.handleClick(event);
    expect(wrapper.state('isFlipped')).toEqual(false)

  });

  it("should call favorite card on click", () => {
    const wrapper = shallow(<Card info={mockData} favoriteCard={mockFunc} />);

    mockFunc("1");
    wrapper.find(".favorite-btn").simulate("click");
    expect(mockFunc).toBeCalledWith(mockData.id);
  });
});
