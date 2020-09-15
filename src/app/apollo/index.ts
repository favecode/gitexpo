import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    HttpLink,
} from '@apollo/client'
import { API_URL } from 'app/config'

const cache: InMemoryCache = new InMemoryCache()

const httpLink: HttpLink = new HttpLink({
    uri: `${API_URL}`,
})

// Client for fetching data from Apollo Server
const client = new ApolloClient<NormalizedCacheObject>({
    link: httpLink,
    cache,
})

export default client
