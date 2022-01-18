import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AuthShadowBox = styled.div`
  background: #FFFFFF;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${props => props.width ? props.width : 'auto'};
  padding: 24px;

  a {
    color: ${props => props.color};
  }
`
export const PaginationLabel = styled.span`
  color: #767676;
  @media only screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`
export const RowCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
`
export const RowFlexEndDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
`
export const RowSpaceBetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`
export const ColorTitle = styled.h1`
  padding: 8px;
  color: ${props => props.color || '#848788'};
  background: ${props => props.background || '#F6F6F6'};
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || '16px'};
  text-align: ${props => props.textAlign || 'left'};
`
export const WhiteRoundedBox = styled.div`
  background: #fff;
  border-radius: ${props => props.borderRadius || '8px'};
  padding: ${props => props.padding || '16px'};
  margin: ${props => props.margin || '0'};
  border: ${props => props.border || '1px solid #ccc'};
`
export const ColorText = styled.span`
  color: ${props => props.color || '#333'};
  font-weight: ${props => props.fontWeight || 'normal'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  font-size: ${props => props.fontSize || '1.4rem'};
`
export const HeaderDropdownWrapper = styled.div`
  background: #fff;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  border-radius: 2px;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
`
export const HeaderDropdownIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HeaderDropdownItemText = styled.div`
  color: #333;
  margin-left: 8px;
  @media only screen and (max-width: 992px) {
    font-size: 12px;
  }
`
export const HeaderDropdownItem = styled.div`
  width: calc(100% / ${props => props.columns || 4});
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  padding: 8px;
  cursor: pointer;

  &:hover {
    ${HeaderDropdownItemText} {
      color: ${props => props.color};
    }
  }
`
export const ColorLink = styled(Link)`
  color: ${props => props.color};
`
export const HeaderBackground = styled.h1`
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding || '16px'};

  svg, img {
    margin-right: 8px;
  }
`