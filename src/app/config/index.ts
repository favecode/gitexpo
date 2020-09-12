export const PORT: number = 8000
export const PROTOCOL: string = 'http'
export const ENDPOINT: string = 'graphql'
export const DOMAIN_URL = 'localhost'
export const API_URL: string = `${PROTOCOL}://${DOMAIN_URL}:${PORT}/${ENDPOINT}`

export default {
    PORT,
    PROTOCOL,
    ENDPOINT,
    DOMAIN_URL,
    API_URL,
}
