import React from 'react'
import Dropdown, { Props as DropdownTypes } from 'app/components/Dropdown'

const Filters: React.FC = () => {
    const dropdowns: DropdownTypes[] = [
        {
            title: 'Spoken Language:',
        },
        {
            title: 'Language:',
        },
        {
            title: 'Date range:',
        },
    ]
    return (
        <div className='flex flex-row justify-end p-5 bg-gray-100'>
            {dropdowns.map(dropdown => (
                <Dropdown {...dropdown} />
            ))}
        </div>
    )
}

export default Filters
