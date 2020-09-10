import React from 'react'
import {
    StyledDropdownLabel,
    StyledDropdown,
    StyledDropdownHeader,
    StyledDropdownBody,
} from './StyledDropdown'

export interface Props {
    label: string
    title: string
}

const Dropdown: React.FC<Props> = ({ title, label }) => {
    const [visible, setVisible] = React.useState<boolean>(false)

    const handleVisibleToggle: () => void = () =>
        setVisible((prevState: boolean) => !prevState)

    return (
        <div className='px-3 relative'>
            <StyledDropdownLabel
                onClick={handleVisibleToggle}
                className='cursor-pointer'>
                {label}
                <span className='font-bold px-1'>Value</span>
            </StyledDropdownLabel>
            <StyledDropdown
                className={`${
                    visible ? '' : 'hidden'
                } shadow-xl bg-white mt-2 rounded-md`}>
                <StyledDropdownHeader className='p-3'>
                    {title}
                </StyledDropdownHeader>
                <StyledDropdownBody className='p-3'>Body</StyledDropdownBody>
            </StyledDropdown>
        </div>
    )
}

export default Dropdown
