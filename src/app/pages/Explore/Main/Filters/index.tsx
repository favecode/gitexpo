import React from 'react'
import Dropdown, { Props as DropdownTypes } from 'app/components/Dropdown'
import { v4 as uuid } from 'uuid'
import { StyledFilter } from './StyledFilter'

const Filters: React.FC = () => {
    const dropdowns: DropdownTypes[] = [
        {
            label: 'Spoken Language:',
            title: 'Select a spoken language',
        },
        {
            label: 'Language:',
            title: 'Select a language',
        },
        {
            label: 'Date range:',
            title: 'Adjust time span',
        },
    ]
    return (
        <StyledFilter className='flex flex-row justify-end p-5 bg-gray-100 rounded-t-lg'>
            {dropdowns.map(dropdown => (
                <Dropdown key={`${uuid()}`} {...dropdown} />
            ))}
        </StyledFilter>
    )
}

export default Filters
