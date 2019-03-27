import React from 'react';
import { shallow } from 'enzyme';
import AddMessage from '../AddMessage';

describe('AddMessage', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      addMessage: jest.fn()
    };
    wrapper = shallow(<AddMessage {...mockProps} />);
  });
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('contains a section for new messages', () => {
    expect(wrapper.find('section#new-message').length).toBe(1);
  });
});
