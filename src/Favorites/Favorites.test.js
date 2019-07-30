import React from "react";
import { shallow } from "enzyme";
import Favorites from "./Favorites.jsx";

describe("Favorites", () => {
  let wrapper, mockData, instance;

  beforeEach(() => {
    mockData = [
      {
        favorites: "Kayla"
      }
    ];
    wrapper = shallow(
      <Favorites favorites={mockData} favoriteCard={jest.fn()} />
    );
    instance = wrapper.instance()
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  
});
