import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { TestPageWrapper } from './TestPageStyled'
import UploadCropModule from '../../../components/UploadCropModule'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { Line } from '@ant-design/plots';


const DemoLine = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    label: {

    },
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return <Line {...config} />;
};

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
        <UploadCropModule callbackFileCropped={(e) => setFileToUpload(e)} callbackFileSrcPreview={(e) => setFileToPreview(e)} grid={true} rotate={true} />
        <img src={fileToPreview} />
        <DemoLine />
      </TestPageWrapper>
    </DefaultLayout>

  )
}

TestPageStyled.propTypes = {}

export default inject('commonStore')(observer(TestPageStyled))