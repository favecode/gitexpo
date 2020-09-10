import React from 'react'
import { StyledDropdown } from './StyledDropdown'

export interface Props {
    title: string
}

const Dropdown: React.FC<Props> = ({ title }) => {
    return (
        <div className='px-3'>
            <StyledDropdown className='cursor-pointer'>
                {title}
                <span className='font-bold px-1'>Value</span>
            </StyledDropdown>
        </div>
    )
}

export default Dropdown
