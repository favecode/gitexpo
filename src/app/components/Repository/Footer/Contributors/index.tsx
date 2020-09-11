import React from 'react'
import { StyledContributors, StyledAvatar } from './StyledContributors'
import { v4 as uuid } from 'uuid'

export interface ContributorType {
    avatar_url: string
    html_url: string
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
        <a
            href={`${props.html_url}`}
            className='inline-flex mr-1 cursor-pointer'>
            <StyledAvatar src={props.avatar_url} />
        </a>
    )
}

export default Contributors
