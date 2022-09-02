import { shallow } from 'enzyme';
import React from 'react';
import Layout from 'components/Layout';

describe('Layout test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Layout {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Layout component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect components-Layout is rendered', () => {
    const wrapper = setup();
    const Layout = findJSXByAttr('components-Layout', wrapper);
    expect(Layout.length).toBe(1);
  });
});
