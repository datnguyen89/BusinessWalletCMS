import styled from 'styled-components'
import { Modal } from 'antd'

export const ProviderWrapper = styled.div`
  // background: #fff;
  // border-radius: ${props => props.borderRadius || '8px'};
  padding: ${props => props.padding || '16px 20px'};
  // margin: ${props => props.margin || '0'};
  // border: ${props => props.border || '1px solid #ccc'};
`
export const TitlePickProviders = styled.h5`
  color: #979797;
`

export const TagProvider = styled.div `
  display: flex;
  overflow: hidden;
  overflow-x: auto;
`

export const ImgIconProvider = styled.div `
  margin-right: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 50%;
`


export const ContentProvider = styled.div `
`
export const ModalCustom = styled(Modal)`
  .ant-modal-header {
    background: #EBF0FF;
  }
  .ant-btn:first-child {
    display: none;
  }
  .ant-modal-body {
    padding-bottom: 0px;
  }
  .ant-modal-body>div {
    margin-top: 0 !important;
  }
  .ant-modal-footer {
    display: flex;
    justify-content: center;
    border: none;
    padding-bottom: 30px;
  }
`

export const ResultSearchForm = styled.div`
  margin: 20px 0 20px;
  .ant-descriptions-item-content {
    display: flex;
    justify-content: flex-end;
  }
`