import React from 'react'
import Dropdown, { Props as DropdownTypes } from 'app/components/Dropdown'
import { v4 as uuid } from 'uuid'
import { StyledFilter } from './StyledFilter'
import options from 'app/options'
import { FiltersContext } from 'app/contexts/filters'

export interface FiltersType {
    languages: string[]
    spokenLanguage: string[]
    since: string
}

const Filters: React.FC = () => {
    const { state: filters } = React.useContext(FiltersContext)

    const dropdowns: DropdownTypes[] = [
        {
            id: 'spokenLanguage',
            label: 'Spoken Language',
            defaultLabel: 'Any',
            title: 'Select a spoken language',
            options: options.spokenLanguages,
            selectedOptions: [...filters.spokenLanguage],
            select: true,
            selectPlaceHolder: 'Filter spoken languages',
        },
        {
            id: 'languages',
            label: 'Language',
            defaultLabel: 'Any',
            title: 'Select a language',
            options: options.languages,
            selectedOptions: [...filters.languages],
            select: true,
            selectPlaceHolder: 'Filter languages',
        },
        {
            id: 'since',
            label: 'Date range',
            defaultLabel: 'Today',
            title: 'Adjust time span',
            options: options.dateRange,
            selectedOptions: [filters.since],
            select: false,
            selectPlaceHolder: '',
        },
    ]
    return (
        <StyledFilter className='flex flex-row justify-start px-5 py-2 bg-gray-100 rounded-t-lg flex-wrap'>
            {dropdowns.map(dropdown => (
                <Dropdown key={`${uuid()}`} {...dropdown} />
            ))}
        </StyledFilter>
    )
}

export default Filters
