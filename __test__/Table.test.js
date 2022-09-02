import { shallow } from 'enzyme';
import React from 'react';
import Table from 'components/Table';

describe('Table test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Table {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Table component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect components-Table is rendered', () => {
    const wrapper = setup();
    const Table = findJSXByAttr('components-Table', wrapper);
    expect(Table.length).toBe(1);
  });
});
