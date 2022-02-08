import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { TestPageWrapper } from './TestPageStyled'
import UploadCropModule from '../../../components/UploadCropModule'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import LineChart from '../../../components/Charts/LineChart'
import ColumnChart from '../../../components/Charts/ColumnChart'
import BarChart from '../../../components/Charts/BarChart'
import DonutChart from '../../../components/Charts/DonutChart'



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
    <DefaultLayout>
      <Helmet>
        <title>Test</title>
      </Helmet>
      <TestPageWrapper>
        <UploadCropModule callbackFileCropped={(e) => setFileToUpload(e)}
                          callbackFileSrcPreview={(e) => setFileToPreview(e)} grid={true} rotate={true} />
        <img src={fileToPreview} />
        <LineChart />
        <ColumnChart />
        <BarChart />
        <DonutChart />
      </TestPageWrapper>
    </DefaultLayout>

  )
}

TestPageStyled.propTypes = {}

export default inject('commonStore')(observer(TestPageStyled))