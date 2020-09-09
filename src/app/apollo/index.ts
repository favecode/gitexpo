import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    HttpLink,
} from '@apollo/client'
import { API_URL } from 'app/config'

const cache = new InMemoryCache()

const Authorization: string = 'bearer dc147dd6531df78a2edb2c85ba3e62930a46f644'

const httpLink = new HttpLink({
    uri: `${API_URL}`,
    headers: {
        Authorization,
    },
})

const client = new ApolloClient<NormalizedCacheObject>({
    link: httpLink,
    cache,
})

export default client
