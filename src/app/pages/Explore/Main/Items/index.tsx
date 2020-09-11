import React from 'react'
import Repository, { Props as RepositoryType } from 'app/components/Repository'
import { v4 as uuid } from 'uuid'

const Items: React.FC = () => {
    const repositories: RepositoryType[] = [
        {
            name: 'rome',
            owner: {
                login: 'romefrontend',
            },
            html_url: 'https://github.com/romefrontend/rome',
            description:
                'The Rome Frontend Toolchain. A linter, compiler, bundler, and more for JavaScript, TypeScript, HTML, Markdown, and CSS.',
            stargazers_count: 13277,
            forks_count: 420,
            language: 'Typescript',
            contributors: [
                {
                    avatar_url:
                        'https://avatars0.githubusercontent.com/u/853712?v=4',
                    html_url: 'https://github.com/sebmck',
                },
                {
                    avatar_url:
                        'https://avatars3.githubusercontent.com/u/5262527?v=4',
                    html_url: 'https://github.com/diokey',
                },
            ],
        },
    ]
    return (
        <div>
            {repositories.map(repository => (
                <Repository key={uuid()} {...repository} />
            ))}
        </div>
    )
}

export default Items
