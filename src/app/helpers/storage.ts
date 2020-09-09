type ValueType = string | null | undefined

interface GetType {
    key: string
}

interface SetType {
    key: string
    value: string | number
}

interface RemoveType {
    key: string
}

const get: (object: GetType) => object = ({ key }) => {
    let value: ValueType = localStorage.getItem(key)
    return value ? JSON.parse(value) : false
}

const set: (object: SetType) => void = ({ key, value }) => {
    value = JSON.stringify(value)
    return localStorage.setItem(key, value)
}

const remove: (object: RemoveType) => void = ({ key }) => {
    return localStorage.removeItem(key)
}

export default {
    get,
    set,
    remove,
}
