import React from 'react'
import { mount } from 'enzyme'
import Header from '../index'
describe('Explorer - Header', () => {
    it('Trending', () => {
        const wrapper = mount(<Header />)
        expect(wrapper.find('h1').text()).toEqual('Trending')
    })
    it('Description', () => {
        const wrapper = mount(<Header />)
        expect(wrapper.find('p').text()).toEqual(
            'See what the GitHub community is most excited about today.',
        )
    })
})
