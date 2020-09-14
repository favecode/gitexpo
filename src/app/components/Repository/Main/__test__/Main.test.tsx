import React from 'react'
import { mount } from 'enzyme'
import Main, { Props as MainType } from '../index'

const data: MainType = {
    description: 'A new Github code explorer',
}

describe('Repository - Main', () => {
    it('description:', () => {
        const wrapper = mount(<Main {...data} />)
        expect(wrapper.find('p').text()).toEqual(`${data.description}`)
    })
})
