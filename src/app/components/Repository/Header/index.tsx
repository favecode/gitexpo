import React from 'react'
import { StyledFullName, StyledHeader, StyledStarButton } from './StyledHeader'
import Reop from 'app/public/icons/repo.svg'
import Star from 'app/public/icons/star.svg'
import { ReactSVG } from 'react-svg'

export interface Props {
    name: string
    owner: {
        login: string
    }
    html_url: string
}

const Header: React.FC<Props> = props => {
    return (
        <StyledHeader className='flex flex-row items-center justify-between'>
            <StyledFullName
                href={`${props.html_url}`}
                className='inline-flex items-end cursor-pointer'>
                <ReactSVG
                    src={Reop}
                    wrapper='span'
                    beforeInjection={(svg: SVGElement) => {
                        svg.setAttribute(
                            'style',
                            'width: 16px;fill: #586069;margin-right:8px;display: inline-block;',
                        )
                    }}
                />
                <span>{`${props.owner.login} / `}</span>
                <span className='font-bold pl-1'>{props.name}</span>
            </StyledFullName>
            <StyledStarButton className='inline-flex items-center rounded-md px-3 py-1 shadow-sm'>
                <ReactSVG
                    src={Star}
                    wrapper='span'
                    beforeInjection={(svg: SVGElement) => {
                        svg.setAttribute(
                            'style',
                            'width: 16px;fill: #6a737d;margin-right:4px;display: inline;',
                        )
                    }}
                />
                <span>Star</span>
            </StyledStarButton>
        </StyledHeader>
    )
}

export default Header
