import gql from 'graphql-tag'

// Treding query to fetching repositories
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
                href
                avatar
                username
            }
        }
    }
`

export default {
    trending,
}
