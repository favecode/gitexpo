import React from 'react'
import Header from './Header'
import Main from './Main'
import { Props as RepositoryType } from 'app/components/Repository'
import { useQuery } from '@apollo/react-hooks'
import api from 'app/api'

const Explore: React.FC = () => {
    const treding = useQuery(api.trending)
    const [repositories, setRepositories] = React.useState<
        RepositoryType[] | null
    >(null)

    React.useEffect(() => {
        if (treding.data) {
            console.log(treding.data.trending)
            setRepositories(treding.data.trending)
        }
    }, [treding.data])

    return (
        <div>
            {repositories && (
                <>
                    <Header />
                    <Main repositories={repositories} />
                </>
            )}
        </div>
    )
}

export default Explore
