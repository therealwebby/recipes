import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Main from './main.js'

describe('Components', () => {
  describe('<Main />', () => {
    it('renders the title', () => {
      const wrapper = mount(<Main />);
      expect(wrapper.find('h1').length).to.equal(1);
    });
  });
});