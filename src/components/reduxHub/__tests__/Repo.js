import React from 'react';
import { shallow } from 'enzyme';
import Repo from '../Repo';

describe('Repo Component', () => {
  it('should render a repo', () => {
    const wrapper = shallow(
      <Repo 
        name='a repo' 
        url='repo.repo' />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
