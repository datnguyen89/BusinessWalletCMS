import styled from 'styled-components'
import IMAGES from '../../images'

export const DrawerSideBarWrapper = styled.aside`
  position: fixed;
  height: 100vh;
  width: ${props => props.width}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;

  .expand-sidebar-icon {
    margin: 16px 0;
    cursor: pointer;
    color: #4C68EF;
  }

  .collapse-sidebar-icon {
    color: #fff;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    display: ${props => props.display} !important;
  }
`
export const BankInfoArea = styled.div`
  background: url(${IMAGES.BANK_BG}) center center no-repeat;
  background-size: cover;
  min-height: 120px;
  display: ${props => props.display};
  justify-content: center;
  align-items: center;
  position: relative;

  .bank-name-sidebar {
    margin: 0 8px;
    text-align: center;
    color: #fff;
    font-weight: 700;
    font-size: 1.4rem;
    width: 50%;
  }
`
export const BankAvatarWrapper = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;

  img {
    object-fit: contain;
    object-position: center;
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
  margin: 12px 12px 0 12px;

  &:hover, &.active {
    background: #4C68EF;
    border-radius: 5px;
    color: #fff;

    svg path {
      fill: #fff !important;
    }
  }

  .menu-sidebar-label {
    margin-left: 12px;
    padding-top: 2px;

  }
`
export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${props => props.flexDirection};

  a {
    margin: 8px;
    height: 32px;
    width: 32px;
  }
`