import styled from 'styled-components'

export const StyledDropdownLabel = styled.div`
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
    font-weight: 500;
    user-select: none;
    box-sizing: border-box;
    z-index: 100px;
`

export const StyledDropdown = styled.div`
    width: 300px;
    position: absolute;
    right: 0;
    border: 1px solid rgba(27, 31, 35, 0.15);
`

export const StyledDropdownHeader = styled.div`
    font-size: 12px;
    font-weight: 600;
    border-bottom: 1px solid rgba(27, 31, 35, 0.15);
    padding: 0.5rem;
    box-sizing: border-box;
`

export const StyledDropdownBody = styled.div`
    font-size: 12px;
    padding: 0.5rem;
    box-sizing: border-box;
    color: #586069;
`
