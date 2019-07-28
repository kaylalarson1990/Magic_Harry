import React from "react";
import { shallow } from "enzyme";
import Favorites from "./Favorites.jsx";

describe("Favorites", () => {
  let wrapper, mockData;

  beforeEach(() => {
    mockData = [
      {
        favorites: "Kayla"
      }
    ];
    wrapper = shallow(
      <Favorites favorites={mockData} favoriteCard={jest.fn()} />
    );
  });
  xit("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
