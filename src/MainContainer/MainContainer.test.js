import React from 'react';
import { shallow } from "enzyme";
import { MainContainer } from './MainContainer';

describe("MainContainer", () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<MainContainer />);
    });
  
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
});