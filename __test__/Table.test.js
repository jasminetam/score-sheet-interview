import React from 'react'
import { shallow } from 'enzyme'
import { findJSXByAttr } from '__test__/testUtils'
import Table from '../components/Table'

const setup = (props = {}, state = null) => {
  return shallow(<Table {...props} />)
}

test('check if Table runs successfully', () => {
  const wrapper = setup()
})

test('check if components-Table runs successfully', () => {
  const wrapper = setup()
  const Table = findJSXByAttr(wrapper, 'components-Table')
  expect(Table.length).toBe(1)
})
