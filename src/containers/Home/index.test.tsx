import * as React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

it('should render', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.text()).toEqual('Home Content');
});
