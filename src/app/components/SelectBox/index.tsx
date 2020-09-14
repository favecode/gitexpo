import React from 'react'
import { OptionType } from 'app/options/types'
import { FiltersContext } from 'app/contexts/filters'
import { ExploreContext } from 'app/contexts/explore'
import Select, { components } from 'react-select'
import { EDIT_FILTERS, CLEAR_REPOSITORIES } from 'app/constants/actionTypes'
import { Props } from 'app/components/Dropdown'

const Dropdown: React.FC<Props> = props => {
    const { state: filters, dispatch } = React.useContext(FiltersContext)
    const { dispatch: exploreDispatch } = React.useContext(ExploreContext)
    const [options] = React.useState<OptionType[]>(props.options)

    const handleChangeFilters = (options: any) => {
        if (props.id === 'languages') {
            if (options && options.length > 0) {
                let languages: string[] = []
                options.map((option: OptionType) => {
                    languages.push(option.value)
                })

                dispatch({
                    type: EDIT_FILTERS,
                    data: {
                        languages,
                    },
                })
            } else {
                dispatch({
                    type: EDIT_FILTERS,
                    data: {
                        languages: [],
                    },
                })
            }
        }

        if (props.id === 'spokenLanguage') {
            if (options) {
                dispatch({
                    type: EDIT_FILTERS,
                    data: {
                        [props.id]: [options.value],
                    },
                })
            } else {
                dispatch({
                    type: EDIT_FILTERS,
                    data: {
                        [props.id]: [],
                    },
                })
            }
        }

        exploreDispatch({
            type: CLEAR_REPOSITORIES,
        })
    }

    const CustomControl = (propsComponent: any) => {
        return (
            <components.Control
                {...propsComponent}
                className='select-control'
            />
        )
    }

    const CustomOption = (propsComponent: any) => {
        return (
            <components.Option {...propsComponent} className='select-option' />
        )
    }

    const CustomMenu = (propsComponent: any) => {
        return <components.Menu {...propsComponent} className='select-menu' />
    }

    const CustomMenuList = (propsComponent: any) => {
        return (
            <components.MenuList
                {...propsComponent}
                className='select-menu-list'
            />
        )
    }

    const CustomComponents = {
        Control: CustomControl,
        Option: CustomOption,
        Menu: CustomMenu,
        MenuList: CustomMenuList,
    }

    return (
        <Select
            isMulti={props.id === 'languages' ? true : false}
            isClearable={true}
            value={props.options.filter((option: OptionType) => {
                if (props.id === 'languages') {
                    if (filters.languages.includes(option.value)) {
                        return option
                    }
                } else {
                    if (filters.spokenLanguage.includes(option.value)) {
                        return option
                    }
                }
            })}
            options={options}
            placeholder={props.selectPlaceHolder}
            menuIsOpen={true}
            menuPosition='absolute'
            components={CustomComponents}
            onChange={e => handleChangeFilters(e)}
        />
    )
}

export default Dropdown
