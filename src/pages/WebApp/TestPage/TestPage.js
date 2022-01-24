import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { TestPageWrapper } from './TestPageStyled'
import UploadCropModule from '../../../components/UploadCropModule'


const TestPageStyled = props => {
  const { commonStore } = props
  const { appTheme } = commonStore

  const [fileToUpload, setFileToUpload] = useState()
  const [fileToPreview, setFileToPreview] = useState()

  useEffect(() => {
    console.log('fileToUpload', fileToUpload)
    console.log('fileToPreview', fileToPreview)
  }, [fileToUpload, fileToPreview])

  return (
    <TestPageWrapper>
      <img src={fileToPreview} />
      <UploadCropModule callbackFileCropped={(e) => setFileToUpload(e)} callbackFileSrcPreview={(e) => setFileToPreview(e)} grid={true} rotate={true} />
    </TestPageWrapper>
  )
}

TestPageStyled.propTypes = {}

export default inject('commonStore')(observer(TestPageStyled))