import { OptionType } from 'app/options/types'

const getLabel: (arr: OptionType[], value: string) => OptionType[] = (
    arr,
    value,
) => {
    return arr.filter((item: OptionType) => {
        if (item.value === value) return item

        return null
    })
}

export default getLabel
