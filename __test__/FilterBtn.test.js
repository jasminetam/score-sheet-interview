import { shallow } from 'enzyme';
import React from 'react';
import FilterBtn from 'components/FilterBtn';

describe('FilterBtn test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<FilterBtn {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect FilterBtn component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect components-FilterBtn is rendered', () => {
    const wrapper = setup();
    const FilterBtn = findJSXByAttr('components-FilterBtn', wrapper);
    expect(FilterBtn.length).toBe(1);
  });
});
