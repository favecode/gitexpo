import React from 'react'
import Repository from 'app/components/Repository'
import { v4 as uuid } from 'uuid'
import { ExploreContext } from 'app/contexts/explore'
import { FiltersContext } from 'app/contexts/filters'
import options from 'app/options'
import Spinner from 'app/public/gif/octocat-spinner-128.gif'
import helpers from 'app/helpers'

const Items: React.FC = props => {
    const { state } = React.useContext(ExploreContext)
    const { state: filters } = React.useContext(FiltersContext)

    return (
        <div>
            {state.repositories ? (
                state.repositories.length > 0 ? (
                    state.repositories.map(repository => (
                        <Repository key={uuid()} {...repository} />
                    ))
                ) : (
                    <div className='text-center border-t font-bold p-8 text-xl'>
                        It looks like we don’t have any trending repositories
                        for{' '}
                        {
                            helpers.getLabel(
                                options.languages,
                                filters.languages[0],
                            )[0].label
                        }
                        .
                    </div>
                )
            ) : (
                <div className='flex justify-center p-10'>
                    <img src={Spinner} width='50' />
                </div>
            )}
        </div>
    )
}

export default Items
