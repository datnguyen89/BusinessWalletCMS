import styled from 'styled-components'
import IMAGES from '../../images'

export const MainSideBarWrapper = styled.aside`
  position: fixed;
  height: 100vh;
  width: ${props => props.width}px;
  display: ${props => props.display};
  flex-direction: column;
  align-items: start;
  overflow-y: auto;
  padding-bottom: 64px;
  padding-top: 64px;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  border-right: 1px solid #ccc;

  .expand-sidebar-icon {
    margin: 16px 0;
    cursor: pointer;
    color: #4C68EF;
  }

  
`

export const MenuSidebarArea = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`
export const MenuSidebarItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 8px 12px 0 12px;

  &:hover, &.active {
    background: #ffffff;
    color: ${props => props.color};

    svg path {
      fill: ${props => props.color} !important;
    }
  }

  .menu-sidebar-label {
    margin-left: 12px;
    padding-top: 2px;
  }
`
export const GroupMenuTitle = styled.h1`
  text-align: left;
  margin: 8px;
`