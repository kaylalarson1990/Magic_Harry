import React from "react";
import { shallow } from "enzyme";
import {Header, mapStateToProps} from "./Header";

describe('Header', () => {
    let wrapper, props;
    beforeEach(() => {
        wrapper = shallow(<Header />)
    })

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})

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