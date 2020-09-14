import React from 'react'
import { mount } from 'enzyme'
import CurrentPeriodStars, { Props as CurrentPeriodStarsType } from '../index'
import helpers from 'app/helpers'
import options from 'app/options'

const data: CurrentPeriodStarsType = {
    currentPeriodStars: 1200,
    since: 'daily',
}

describe('Repository - Footer - CurrentPeriodStars', () => {
    it('currentPeriodStars:', () => {
        const wrapper = mount(<CurrentPeriodStars {...data} />)
        expect(wrapper.find('div').text()).toEqual(
            `${helpers.numberFormat(
                data.currentPeriodStars,
            )}stars ${helpers
                .getLabel(options.dateRange, data.since)[0]
                .label.toLowerCase()}`,
        )
    })
})
