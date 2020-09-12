import React from 'react'
import Repository from 'app/components/Repository'
import { v4 as uuid } from 'uuid'
import { ExploreContext } from 'app/contexts/explore'
import Spinner from 'app/public/gif/octocat-spinner-128.gif'

const Items: React.FC = props => {
    const { state } = React.useContext(ExploreContext)
    return (
        <div>
            {state.repositories.length > 0 ? (
                state.repositories.map(repository => (
                    <Repository key={uuid()} {...repository} />
                ))
            ) : (
                <div className='flex justify-center p-10'>
                    <img src={Spinner} width='50' />
                </div>
            )}
        </div>
    )
}

export default Items
