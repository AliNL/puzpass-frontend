import * as React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

it('should render', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.text()).toEqual('Header Content');
});
