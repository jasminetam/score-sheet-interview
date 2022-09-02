import { shallow } from 'enzyme';
import React from 'react';
import Input from 'components/Input';

describe('Input test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Input {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Input component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect components-Input is rendered', () => {
    const wrapper = setup();
    const Input = findJSXByAttr('components-Input', wrapper);
    expect(Input.length).toBe(1);
  });
});
