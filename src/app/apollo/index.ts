import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    HttpLink,
} from '@apollo/client'
import { API_URL } from 'app/config'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
    uri: `${API_URL}`,
})

const client = new ApolloClient<NormalizedCacheObject>({
    link: httpLink,
    cache,
})

export default client
