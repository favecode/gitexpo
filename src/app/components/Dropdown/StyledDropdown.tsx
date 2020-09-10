import styled from 'styled-components'

export const StyledDropdown = styled.div`
    color: #586069;
    &:hover {
        color: #24292e;
    }
    &:after {
        display: inline-block;
        width: 0;
        height: 0;
        vertical-align: -2px;
        content: '';
        border: 4px solid transparent;
        border-top-color: currentcolor;
    }
    font-size: 14px;
`
