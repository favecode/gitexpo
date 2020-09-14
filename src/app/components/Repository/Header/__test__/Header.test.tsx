import React from 'react'
import { mount } from 'enzyme'
import Header, { Props as HeaderType } from '../index'

const data: HeaderType = {
    name: 'gitexpo',
    author: 'favecode',
    url: 'https://github.com/favecode/gitexpo',
}

describe('Repository - Header', () => {
    it('author / name:', () => {
        const wrapper = mount(<Header {...data} />)
        expect(wrapper.find('a > span').text()).toEqual(
            `${data.author} / ${data.name}`,
        )
    })

    it('url:', () => {
        const wrapper = mount(<Header {...data} />)
        expect(wrapper.find('a').prop('href')).toEqual(data.url)
    })
})
