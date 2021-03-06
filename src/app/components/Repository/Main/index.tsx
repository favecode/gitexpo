import React from 'react'
import { StyledDescription } from './StyledMain'

export interface Props {
    description: string
}

const Main: React.FC<Props> = props => {
    return (
        <StyledDescription className='my-1'>
            {props.description}
        </StyledDescription>
    )
}

export default Main
