import gql from 'graphql-tag'

const trending = gql`
    query trending(
        $languages: [String]
        $spokenLanguages: [String]
        $since: String
    ) {
        trending(
            languages: $languages
            spokenLanguages: $spokenLanguages
            since: $since
        ) {
            author
            name
            avatar
            url
            description
            language
            languageColor
            stars
            forks
            currentPeriodStars
            contributors {
                herf
                avatar
                username
            }
        }
    }
`

export default {
    trending,
}
