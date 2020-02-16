import React from 'react';
import { mount } from 'enzyme';
import UserInfo from '../userInfo';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('User Info Component', () => {
  it('should render userInfo', () => {
    const wrapper = mount(
      <Provider store={store}>
        <UserInfo />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

