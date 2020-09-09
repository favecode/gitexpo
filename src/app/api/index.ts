import gql from 'graphql-tag'

const viewer = gql`
    query viewer {
        login
    }
`

export default {
    viewer,
}
