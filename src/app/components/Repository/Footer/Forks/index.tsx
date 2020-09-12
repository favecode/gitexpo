import React from 'react'
import { StyledForks } from './StyledForks'
import { ReactSVG } from 'react-svg'
import Fork from 'app/public/icons/fork.svg'
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
            <ReactSVG
                src={Fork}
                wrapper='span'
                beforeInjection={(svg: SVGElement) => {
                    svg.setAttribute(
                        'style',
                        'width: 16px;fill: #6a737d;margin-right:2px;display: inline;',
                    )
                }}
            />
            <span>{helpers.numberFormat(props.forks)}</span>
        </StyledForks>
    )
}

export default Forks
