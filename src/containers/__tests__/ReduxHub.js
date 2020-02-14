import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import ReduxHub from '../ReduxHub';

describe('Redux Hub container', () => {
  it('should render Redux Hub', () => {
    const wrapper = mount(
      <Provider store={store} >
        <ReduxHub />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
