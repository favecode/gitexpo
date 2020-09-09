import { DEFAULT_ECDH_CURVE } from 'tls'

export const PROTOCOL: string = 'https'
export const ENDPOINT: string = 'graphql'
export const DOMAIN_URL = 'github.com'
export const API_URL: string = `${PROTOCOL}://api.${DOMAIN_URL}/${ENDPOINT}`

export default {
    PROTOCOL,
    ENDPOINT,
    DOMAIN_URL,
    API_URL,
}
