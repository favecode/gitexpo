import styled from 'styled-components'

export const StyledHeader = styled.div``

export const StyledFullName = styled.a`
    font-size: 20px;
    line-height: 25px;
    box-sizing: border-box;
    &:hover {
        text-decoration: underline;
    }
    color: #0366d6;
    & span {
        word-break: break-word;
    }
`

export const StyledStarButton = styled.button`
    background-color: #fafbfc;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid rgba(27, 31, 35, 0.15);
    &:hover {
        background-color: #f5f8fa;
    }
    & span {
        display: inline-flex;
        align-items: center;
    }
`
