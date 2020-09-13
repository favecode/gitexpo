import React from 'react'
import { StyledFullName, StyledHeader, StyledStarButton } from './StyledHeader'
import Icon from 'app/components/Icon'

export interface Props {
    name: string
    author: string
    url: string
}

const Header: React.FC<Props> = props => {
    return (
        <StyledHeader className='flex flex-row items-center justify-between'>
            <StyledFullName
                href={`${props.url}`}
                className='inline-flex items-end cursor-pointer flex-wrap'>
                <span>
                    <Icon
                        icon='Repo'
                        fill='#586069'
                        margin='0 8px 0 0'
                        display='inline-block'
                    />
                    {`${props.author} / `}
                    <span className='font-bold pl-1'>{props.name}</span>
                </span>
            </StyledFullName>
            <StyledStarButton className='inline-flex items-center rounded-md px-3 py-1 shadow-sm'>
                <Icon
                    icon='Star'
                    fill='#6a737d'
                    margin='0 4px 0 0'
                    display='inline'
                />
                <span>Star</span>
            </StyledStarButton>
        </StyledHeader>
    )
}

export default Header
