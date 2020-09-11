import React from 'react'
import { StyledStars } from './StyledStars'
import { ReactSVG } from 'react-svg'
import Star from 'app/public/icons/star.svg'
import helpers from 'app/helpers'

export interface Props {
    html_url: string
    stargazers_count: number
}

const Stars: React.FC<Props> = props => {
    return (
        <StyledStars
            href={`${props.html_url}/stargazers`}
            className='inline-flex items-center mr-4 cursor-pointer'>
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
            <span>{helpers.numberFormat(props.stargazers_count)}</span>
        </StyledStars>
    )
}

export default Stars
