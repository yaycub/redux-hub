import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store';
import Repos from '../Repos';

describe('Search Form Component', () => {
  it('should render Search Form', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Repos />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
