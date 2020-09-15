import styled, { css } from 'styled-components'

// Label for Dropdown Component
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
// Dropdown container
export const StyledDropdown = styled.div`
    width: 300px;
    position: absolute;
    ${window.innerWidth > 768 &&
    css`
        right: 0;
    `};
    border: 1px solid rgba(27, 31, 35, 0.15);
    z-index: 100;
`
// Header of Dropdown component(title and input filter)
export const StyledDropdownHeader = styled.div`
    font-size: 12px;
    font-weight: 600;
    border-bottom: 1px solid rgba(27, 31, 35, 0.15);
    padding: 8px 10px;
    box-sizing: border-box;
`
// Body of Dropdown component(list of options)
export const StyledDropdownBody = styled.div`
    font-size: 12px;
    box-sizing: border-box;
    color: #586069;
`
// Container for SearchBox component
export const StyledDropdownSearchBox = styled.div`
    width: 300px;
    position: absolute;
    ${window.innerWidth > 768 &&
    css`
        right: 0;
    `};
    font-size: 12px;
    box-sizing: border-box;
    color: #24292e;
    border: 1px solid #e9ecef;
    z-index: 100;
`
// Container for Dropdown list items
export const StyledDropdownList = styled.div`
    font-size: 12px;
    max-height: 400px;
    box-sizing: border-box;
    color: #586069;
`
// Unselected item of Dropdown list
export const StyledDropdownListItem = styled.div`
    padding: 8px 8px 8px 30px;
    box-sizing: border-box;
    color: #586069;
    &:hover {
        background-color: #0465d6;
        color: white;
    }
    &:hover svg {
        fill: white !important;
    }
    &:not(:last-child) {
        border-bottom: 1px solid #e9ecef;
    }
`
// Selected item of Dropdown list
export const StyledDropdownSelectedListItem = styled.div`
    padding: 8px 10px;
    box-sizing: border-box;
    ${props =>
        props.color &&
        css`
            color: ${props.color};
        `};
    &:hover {
        background-color: #0465d6;
        color: white;
    }
    &:hover svg {
        fill: white !important;
    }
    &:not(:last-child) {
        border-bottom: 1px solid #e9ecef;
    }
`
