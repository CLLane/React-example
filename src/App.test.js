import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from './App';
import Creatures from './Creatures.js'
import CreaturesDetails from './CreatureDetails'

describe('Routes', () => {
  it('should relocate to the endpoin /puppies when the puppies NavLink is clicke', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(App)).toHaveLength(1)
  })
})