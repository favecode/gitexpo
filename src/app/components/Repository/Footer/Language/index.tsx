import React from 'react'
import { StyledLanguageColor, StyledLanguage } from './StyledLanguage'

export interface Props {
    language: string
    languageColor: string
}

const Language: React.FC<Props> = props => {
    return (
        <StyledLanguage className='inline-flex items-center mr-4'>
            <StyledLanguageColor className='mr-1' color={props.languageColor} />
            <span>{props.language}</span>
        </StyledLanguage>
    )
}

export default Language
