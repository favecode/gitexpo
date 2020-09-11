import React from 'react'
import { StyledStarsByDate } from './StyledStarsByDate'
import { ReactSVG } from 'react-svg'
import Star from 'app/public/icons/star.svg'
import helpers from 'app/helpers'

export interface Props {
    stargazers_by_date_count: number
}

const StarsByDate: React.FC<Props> = props => {
    return (
        <StyledStarsByDate className='inline-flex items-center justify-self-end ml-auto'>
            <ReactSVG
                src={Star}
                wrapper='span'
                beforeInjection={(svg: SVGElement) => {
                    svg.setAttribute(
                        'style',
                        'width: 16px;fill: #6a737d;margin-right:2px;display: inline;',
                    )
                }}
            />
            <span>{helpers.numberFormat(props.stargazers_by_date_count)}</span>
            <span className='pl-1'>stars this week</span>
        </StyledStarsByDate>
    )
}

export default StarsByDate
