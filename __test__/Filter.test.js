import { shallow } from 'enzyme';
import React from 'react';
import Filter from 'components/Filter';

describe('Filter test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Filter {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Filter component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect components-Filter is rendered', () => {
    const wrapper = setup();
    const Filter = findJSXByAttr('components-Filter', wrapper);
    expect(Filter.length).toBe(1);
  });
});
