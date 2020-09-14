import React from 'react'
import { mount } from 'enzyme'
import Stars, { Props as StarsType } from '../index'
import helpers from 'app/helpers'

const data: StarsType = {
    url: 'https://github.com/favecode/gitexpot',
    stars: 1200,
}

describe('Repository - Footer - Stars', () => {
    it('url:', () => {
        const wrapper = mount(<Stars {...data} />)
        expect(wrapper.find('a').prop('href')).toEqual(`${data.url}/stargazers`)
    })

    it('stars:', () => {
        const wrapper = mount(<Stars {...data} />)
        expect(wrapper.find('a > span:last-child').text()).toEqual(
            helpers.numberFormat(data.stars),
        )
    })
})
