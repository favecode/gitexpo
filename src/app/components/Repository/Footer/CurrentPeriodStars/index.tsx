import React from 'react'
import { StyledCurrentPeriodStars } from './StyledCurrentPeriodStars'
import Icon from 'app/components/Icon'
import helpers from 'app/helpers'

export interface Props {
    currentPeriodStars: number
}

const CurrentPeriodStars: React.FC<Props> = props => {
    return (
        <StyledCurrentPeriodStars className='inline-flex items-center justify-self-end ml-auto'>
            <Icon
                icon='Star'
                fill='#6a737d'
                margin='0 2px 0 0'
                display='inline'
            />
            <span>{helpers.numberFormat(props.currentPeriodStars)}</span>
            <span className='pl-1'>stars this week</span>
        </StyledCurrentPeriodStars>
    )
}

export default CurrentPeriodStars
