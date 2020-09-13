import React, { useRef } from 'react'
import {
    StyledDropdownLabel,
    StyledDropdown,
    StyledDropdownHeader,
    StyledDropdownBody,
    StyledDropdownList,
    StyledDropdownListItem,
    StyledDropdownSelectedListItem,
    StyledDropdownSearchBox,
} from './StyledDropdown'
import { OptionType } from 'app/options/types'
import { v4 as uuid } from 'uuid'
import helpers from 'app/helpers'
import Icon from 'app/components/Icon'
import { FiltersContext } from 'app/contexts/filters'
import { ExploreContext } from 'app/contexts/explore'
import Select from 'react-select'
import { EDIT_FILTERS, CLEAR_REPOSITORIES } from 'app/constants/actionTypes'

export interface Props {
    id: string
    label: string
    defaultLabel: string
    title: string
    options: OptionType[]
    selectedOptions: string[]
    select: boolean
    selectPlaceHolder: string
}

const Dropdown: React.FC<Props> = props => {
    const { state: filters, dispatch } = React.useContext(FiltersContext)
    const { dispatch: exploreDispatch } = React.useContext(ExploreContext)
    const [visible, setVisible] = React.useState<boolean>(false)
    const [options, setOptions] = React.useState<OptionType[]>(props.options)
    const selectRef = useRef<any>()

    const handleVisibleToggle: () => void = () =>
        setVisible((prevState: boolean) => !prevState)

    const selectedOptions: OptionType[] = props.selectedOptions.map(
        (item: string) => {
            let result: OptionType[] = helpers.getLabel(props.options, item)

            return result[0]
        },
    )

    const handleChangeFilters = (option: OptionType) => {
        if (props.id === 'since') {
            dispatch({
                type: EDIT_FILTERS,
                data: {
                    since: option.value,
                },
            })

            exploreDispatch({
                type: CLEAR_REPOSITORIES,
            })
        }
    }

    return (
        <div className='px-3 relative'>
            <StyledDropdownLabel
                onClick={handleVisibleToggle}
                className='cursor-pointer'>
                {props.label}
                <span className='font-bold px-1'>
                    {props.selectedOptions.length > 0
                        ? selectedOptions[0].label
                        : props.defaultLabel}
                </span>
            </StyledDropdownLabel>
            <StyledDropdown
                className={`${
                    visible ? '' : 'hidden'
                } shadow-xl bg-white mt-2 rounded-md overflow-hidden`}>
                <StyledDropdownHeader>{props.title}</StyledDropdownHeader>
                {props.select && (
                    <StyledDropdownSearchBox>
                        <Select
                            ref={selectRef}
                            isMulti
                            options={options}
                            placeholder={props.selectPlaceHolder}
                        />
                    </StyledDropdownSearchBox>
                )}
                <StyledDropdownBody>
                    <StyledDropdownList className='overflow-y-scroll'>
                        {options.map(option => {
                            let isSelected = helpers.getLabel(
                                selectedOptions,
                                option.value,
                            )
                            return isSelected.length > 0 ? (
                                <StyledDropdownSelectedListItem
                                    className='cursor-pointer flex item-center'
                                    key={uuid()}>
                                    <Icon
                                        icon='Check'
                                        fill='#24292e'
                                        margin='0 6px 0 0'
                                    />
                                    {option.label}
                                </StyledDropdownSelectedListItem>
                            ) : (
                                <StyledDropdownListItem
                                    onClick={() => handleChangeFilters(option)}
                                    className='cursor-pointer'
                                    key={uuid()}>
                                    {option.label}
                                </StyledDropdownListItem>
                            )
                        })}
                    </StyledDropdownList>
                </StyledDropdownBody>
            </StyledDropdown>
        </div>
    )
}

export default Dropdown
