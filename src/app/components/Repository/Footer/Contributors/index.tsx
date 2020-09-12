import React from 'react'
import { StyledContributors, StyledAvatar } from './StyledContributors'
import { v4 as uuid } from 'uuid'

export interface ContributorType {
    avatar: string
    herf: string
}

export interface Props {
    contributors: ContributorType[]
}

const Contributors: React.FC<Props> = props => {
    return (
        <StyledContributors className='inline-flex items-center mr-4 cursor-pointer'>
            <span className='pr-1'>Built by </span>
            {props.contributors.map(contributor => (
                <Contributor key={uuid()} {...contributor} />
            ))}
        </StyledContributors>
    )
}

const Contributor: React.FC<ContributorType> = props => {
    return (
        <a href={`${props.herf}`} className='inline-flex mr-1 cursor-pointer'>
            <StyledAvatar src={props.avatar} />
        </a>
    )
}

export default Contributors
