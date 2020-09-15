import React from 'react'
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
import SelectBox from 'app/components/SelectBox'
import { EDIT_FILTERS, CLEAR_REPOSITORIES } from 'app/constants/actionTypes'

export interface Props {
    id: string // for indentify filters
    label: string // label for Dropdown
    defaultLabel: string // for unselected filter
    title: string // header title for Dropdown
    options: OptionType[] // values for filter
    selectedOptions: string[] // selected items of filter
    select: boolean // use SelectBox component of not
    selectPlaceHolder: string // placeholder for input of SelectBox
}

const Dropdown: React.FC<Props> = props => {
    const { state: filters, dispatch } = React.useContext(FiltersContext)
    const { dispatch: exploreDispatch } = React.useContext(ExploreContext)
    const [visible, setVisible] = React.useState<boolean>(false)
    const [options] = React.useState<OptionType[]>(props.options)

    // for showing or hiding Dropdown
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
            // Set new since filter
            dispatch({
                type: EDIT_FILTERS,
                data: {
                    since: option.value,
                },
            })
        }
        // Clear stored repositories
        exploreDispatch({
            type: CLEAR_REPOSITORIES,
        })
    }

    return (
        <div className='py-3 pr-4 relative'>
            {/* Label of Dropdown */}
            <StyledDropdownLabel
                onClick={handleVisibleToggle}
                className='cursor-pointer'>
                {props.label}:
                <span className='font-bold px-1'>
                    {props.selectedOptions.length > 1
                        ? selectedOptions.map(
                              (selectedOption: OptionType, key: number) =>
                                  `${key > 0 ? ', ' : ''}${
                                      selectedOption.label
                                  }`,
                          )
                        : props.selectedOptions.length > 0
                        ? selectedOptions[0].label
                        : props.defaultLabel}
                </span>
            </StyledDropdownLabel>

            {props.select ? (
                <StyledDropdownSearchBox
                    className={`${
                        visible ? '' : 'hidden'
                    } shadow-xl bg-white mt-2 rounded-t-md `}>
                    <StyledDropdownHeader>{props.title}</StyledDropdownHeader>
                    <SelectBox {...props} />
                </StyledDropdownSearchBox>
            ) : (
                <StyledDropdown
                    className={`${
                        visible ? '' : 'hidden'
                    } shadow-xl bg-white mt-2 rounded-md overflow-hidden`}>
                    <StyledDropdownHeader>{props.title}</StyledDropdownHeader>
                    <StyledDropdownBody>
                        <StyledDropdownList className='overflow-y-scroll'>
                            {options.map(option => {
                                let isSelected = helpers.getLabel(
                                    selectedOptions,
                                    option.value,
                                )
                                return isSelected.length > 0 ? (
                                    // Selected Items
                                    <StyledDropdownSelectedListItem
                                        color='#24292e'
                                        className='cursor-pointer flex item-center font-bold'
                                        key={uuid()}>
                                        <Icon
                                            icon='Check'
                                            fill='#24292e'
                                            margin='0 6px 0 0'
                                        />
                                        {option.label}
                                    </StyledDropdownSelectedListItem>
                                ) : (
                                    // Unselected Items
                                    <StyledDropdownListItem
                                        onClick={() =>
                                            handleChangeFilters(option)
                                        }
                                        className='cursor-pointer'
                                        key={uuid()}>
                                        {option.label}
                                    </StyledDropdownListItem>
                                )
                            })}
                        </StyledDropdownList>
                    </StyledDropdownBody>
                </StyledDropdown>
            )}
        </div>
    )
}

export default Dropdown
