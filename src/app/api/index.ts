import gql from 'graphql-tag'

const trending = gql`
    query trending(
        $languages: [String]
        $spokenLanguage: [String]
        $since: String
    ) {
        trending(
            languages: $languages
            spokenLanguage: $spokenLanguage
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
