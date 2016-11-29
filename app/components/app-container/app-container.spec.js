import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import AppContainer from './app-container.js'

describe('Components', () => {
  describe('<AppContainer />', () => {
    it('renders the title', () => {
      const wrapper = mount(<AppContainer />);
      expect(wrapper.find('h1').length).to.equal(1);
    });
  });
});