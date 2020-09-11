import { format } from 'path'
// Triple separating numbers
const numberFormat: (value: number) => string = value => {
    return Intl.NumberFormat().format(value)
}

export default numberFormat
