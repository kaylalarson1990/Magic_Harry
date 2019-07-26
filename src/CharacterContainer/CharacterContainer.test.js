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
