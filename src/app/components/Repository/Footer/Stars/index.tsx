import React from 'react'
import { StyledStars } from './StyledStars'
import Icon from 'app/components/Icon'
import helpers from 'app/helpers'

export interface Props {
    url: string
    stars: number
}

const Stars: React.FC<Props> = props => {
    return (
        <StyledStars
            href={`${props.url}/stargazers`}
            className='inline-flex items-center mr-4 cursor-pointer'>
            <Icon
                icon='Star'
                fill='#6a737d'
                margin='0 2px 0 0'
                display='inline'
            />
            <span>{helpers.numberFormat(props.stars)}</span>
        </StyledStars>
    )
}

export default Stars
