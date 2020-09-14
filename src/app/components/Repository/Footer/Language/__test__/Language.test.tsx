import React from 'react'
import { mount } from 'enzyme'
import Language, { Props as LanguageType } from '../index'

const data: LanguageType = {
    language: 'Typescript',
    languageColor: '#2b7489',
}

describe('Repository - Footer - Language', () => {
    it('language:', () => {
        const wrapper = mount(<Language {...data} />)
        expect(wrapper.find('span > span:last-child').text()).toEqual(
            data.language,
        )
    })

    it('languageColor:', () => {
        const wrapper = mount(<Language {...data} />)
        expect(
            wrapper.find(`span[color='${data.languageColor}']`).prop('color'),
        ).toEqual(data.languageColor)
    })
})
