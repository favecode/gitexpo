import styled from 'styled-components'

export const StyledForks = styled.a`
    font-size: 12px;
    border-radius: 50%;
    color: #586069;
    box-sizing: border-box;
    &:hover {
        color: #0366d6;
    }

    &:hover svg {
        fill: #0366d6 !important;
    }

    & span {
        display: inline-flex;
        align-items: center;
    }
`
