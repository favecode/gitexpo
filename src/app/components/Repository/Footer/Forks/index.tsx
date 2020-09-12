import React from 'react'
import { StyledForks } from './StyledForks'
import Icon from 'app/components/Icon'
import helpers from 'app/helpers'

export interface Props {
    name: string
    url: string
    forks: number
}

const Forks: React.FC<Props> = props => {
    return (
        <StyledForks
            href={`${props.url}/network/members.${props.name}`}
            className='inline-flex items-center mr-4 cursor-pointer'>
            <Icon
                icon='Fork'
                fill='#6a737d'
                margin='0 2px 0 0'
                display='inline'
            />
            <span>{helpers.numberFormat(props.forks)}</span>
        </StyledForks>
    )
}

export default Forks
