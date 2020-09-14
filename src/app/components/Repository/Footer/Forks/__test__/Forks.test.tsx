import React from 'react'
import { mount } from 'enzyme'
import Forks, { Props as ForksType } from '../index'
import helpers from 'app/helpers'

const data: ForksType = {
    name: 'gitexpo',
    url: 'https://github.com/favecode/gitexpo',
    forks: 3000,
}

describe('Repository - Footer - Forks', () => {
    it('url:', () => {
        const wrapper = mount(<Forks {...data} />)
        expect(wrapper.find('a').prop('href')).toEqual(
            `${data.url}/network/members.${data.name}`,
        )
    })

    it('forks:', () => {
        const wrapper = mount(<Forks {...data} />)
        expect(wrapper.find('a > span:last-child').text()).toEqual(
            helpers.numberFormat(data.forks),
        )
    })
})
