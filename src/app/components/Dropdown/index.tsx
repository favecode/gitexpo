import React from 'react'
import {
    StyledDropdownLabel,
    StyledDropdown,
    StyledDropdownHeader,
    StyledDropdownBody,
    StyledDropdownList,
    StyledDropdownListItem,
    StyledDropdownSearchBox,
} from './StyledDropdown'
import { OptionType } from 'app/options/types'
import { v4 as uuid } from 'uuid'

export interface Props {
    label: string
    defaultLabel: string
    title: string
    options: OptionType[]
    selectedOptions: OptionType[]
    searchBox: boolean
}

const Dropdown: React.FC<Props> = props => {
    const [visible, setVisible] = React.useState<boolean>(false)

    const handleVisibleToggle: () => void = () =>
        setVisible((prevState: boolean) => !prevState)

    return (
        <div className='px-3 relative'>
            <StyledDropdownLabel
                onClick={handleVisibleToggle}
                className='cursor-pointer'>
                {props.label}
                <span className='font-bold px-1'>
                    {props.selectedOptions.length > 1
                        ? props.selectedOptions[0].label
                        : props.defaultLabel}
                </span>
            </StyledDropdownLabel>
            <StyledDropdown
                className={`${
                    visible ? '' : 'hidden'
                } shadow-xl bg-white mt-2 rounded-md overflow-hidden`}>
                <StyledDropdownHeader>{props.title}</StyledDropdownHeader>
                {props.searchBox && (
                    <StyledDropdownSearchBox>
                        Search Box
                    </StyledDropdownSearchBox>
                )}
                <StyledDropdownBody>
                    <StyledDropdownList className='overflow-y-scroll'>
                        {props.options.map(option => (
                            <StyledDropdownListItem
                                className='cursor-pointer'
                                key={uuid()}>
                                {option.label}
                            </StyledDropdownListItem>
                        ))}
                    </StyledDropdownList>
                </StyledDropdownBody>
            </StyledDropdown>
        </div>
    )
}

export default Dropdown
