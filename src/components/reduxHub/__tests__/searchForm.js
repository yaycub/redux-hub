import React from 'react';
import { mount } from 'enzyme';
import SearchForm from '../searchForm';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('Search Form Component', () => {
  it('should render Search Form', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
