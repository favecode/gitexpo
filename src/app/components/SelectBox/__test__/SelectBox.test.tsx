import React from 'react'
import { mount } from 'enzyme'
import SelectBox from '../index'
import { Props as SelectBoxType } from 'app/components/Dropdown'

const data: SelectBoxType = {
    id: 'languages',
    label: 'Language',
    defaultLabel: 'Any',
    title: 'Select a language',
    options: [
        {
            value: 'javascript',
            label: 'Javascript',
        },
        {
            value: 'typescript',
            label: 'Typescript',
        },
    ],
    selectedOptions: [],
    select: true,
    selectPlaceHolder: 'Filter languages',
}

describe('Repository - SelectBox', () => {
    it('List Length:', () => {
        const wrapper = mount(<SelectBox {...data} />)
        expect(
            wrapper.find('.select-menu-list div.select-option').length,
        ).toEqual(data.options.length)
    })
})
