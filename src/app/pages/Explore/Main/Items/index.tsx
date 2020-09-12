import React from 'react'
import Repository, { Props as RepositoryType } from 'app/components/Repository'
import { v4 as uuid } from 'uuid'

interface Props {
    repositories: RepositoryType[]
}

const Items: React.FC<Props> = props => {
    return (
        <div>
            {props.repositories != null &&
                props.repositories.map(repository => (
                    <Repository key={uuid()} {...repository} />
                ))}
        </div>
    )
}

export default Items
