import React from 'react'
import { mount } from 'enzyme'
import Contributors, { ContributorType } from '../index'

const data: ContributorType[] = [
    {
        avatar: 'https://avatars2.githubusercontent.com/u/20154203',
        href: 'https://github.com/favecode',
    },
]

describe('Repository - Footer - Contributors', () => {
    it('herf:', () => {
        const wrapper = mount(<Contributors contributors={data} />)
        expect(wrapper.find('a').prop('href')).toEqual(data[0].href)
    })

    it('avatar:', () => {
        const wrapper = mount(<Contributors contributors={data} />)
        expect(wrapper.find('img').prop('src')).toEqual(data[0].avatar)
    })
})
