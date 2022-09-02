import { shallow } from 'enzyme';
import React from 'react';
import Header from 'components/Header';

describe('Header test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Header {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Header component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect components-Header is rendered', () => {
    const wrapper = setup();
    const Header = findJSXByAttr('components-Header', wrapper);
    expect(Header.length).toBe(1);
  });
});
