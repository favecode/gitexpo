import React from 'react'
import { ReactSVG } from 'react-svg'
import Fork from 'app/public/icons/fork.svg'
import Star from 'app/public/icons/star.svg'
import Check from 'app/public/icons/check.svg'
import Repo from 'app/public/icons/repo.svg'
import X from 'app/public/icons/x.svg'

interface Props {
    icon: string
    width?: string
    fill?: string
    margin?: string
    display?: string
}

const Icon: React.FC<Props> = props => {
    return (
        <ReactSVG
            src={switchIcon(props.icon) || Star}
            wrapper='span'
            beforeInjection={(svg: SVGElement) => {
                svg.setAttribute(
                    'style',
                    `width: ${props.width || '16px'};fill: ${
                        props.fill || 'black'
                    };margin:${props.margin || ''};display: ${
                        props.display || ''
                    };`,
                )
            }}
        />
    )
}

const switchIcon: (icon: string) => string | undefined = icon => {
    switch (icon) {
        case 'Fork':
            return Fork
        case 'Star':
            return Star
        case 'Check':
            return Check
        case 'Repo':
            return Repo
        case 'X':
            return X
    }
}

export default Icon
