import React from 'react';
import {shallow, configure} from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// // tslint:disable-next-line:no-any
// (enzyme as any).configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App/>);
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render people home page', () => {
    expect(instance.homePage()).toMatchSnapshot()
  })


})