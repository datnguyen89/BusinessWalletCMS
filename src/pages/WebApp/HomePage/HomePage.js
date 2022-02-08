import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { HomePageWrapper, HomeWhiteBox } from './HomePageStyled'
import { Col, Row, Timeline } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faDollarSign, faFileContract, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { ArrowUpOutlined } from '@ant-design/icons'
import CardDashboard from '../../../components/CardDashboard/CardDashboard'
import ColumnChart from '../../../components/Charts/ColumnChart'
import { ColorText, ColorTitle } from '../../../components/CommonStyled/CommonStyled'
import LineChart from '../../../components/Charts/LineChart'
import BarChart from '../../../components/Charts/BarChart'
import DonutChart from '../../../components/Charts/DonutChart'
import TopSellingTable from '../../../components/TopSellingTable/TopSellingTable'


const HomePage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <HomePageWrapper>
        <ColorTitle fontSize={'16px'}>Trang chủ</ColorTitle>
        <Row gutter={[16, 16]}>
          <Col span={10}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <CardDashboard
                  title={'Khách hàng'}
                  avatar={<FontAwesomeIcon size={'2x'} icon={faUserTie} />}
                  content={'6.789'}
                  icon={<ArrowUpOutlined />}
                  numberColor={'rgb(10, 207, 151)'}
                  number={'5.27'} />
              </Col>
              <Col span={12}>
                <CardDashboard
                  title={'Đơn hàng'}
                  avatar={<FontAwesomeIcon size={'2x'} icon={faFileContract} />}
                  content={'1.234'}
                  icon={<ArrowUpOutlined />}
                  numberColor={'rgb(10, 207, 151)'}
                  number={'5.27'} />
              </Col>
              <Col span={12}>
                <CardDashboard
                  title={'Doanh thu'}
                  avatar={<FontAwesomeIcon size={'2x'} icon={faDollarSign} />}
                  content={'6.789.000'}
                  icon={<ArrowUpOutlined />}
                  numberColor={'rgb(10, 207, 151)'}
                  number={'5.27'} />
              </Col>
              <Col span={12}>
                <CardDashboard
                  title={'Tăng trưởng'}
                  avatar={<FontAwesomeIcon size={'2x'} icon={faChartLine} />}
                  content={'6.789 %'}
                  icon={<ArrowUpOutlined />}
                  numberColor={'rgb(10, 207, 151)'}
                  number={'5.27'} />
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <HomeWhiteBox>
              <ColorTitle margin={'0 0 24px 0'}>COLUMN CHART</ColorTitle>
              <ColumnChart />
            </HomeWhiteBox>
          </Col>
          <Col span={14}>
            <HomeWhiteBox>
              <ColorTitle margin={'0 0 24px 0'}>LINE CHART</ColorTitle>
              <LineChart />
            </HomeWhiteBox>
          </Col>
          <Col span={10}>
            <HomeWhiteBox>
              <ColorTitle margin={'0 0 24px 0'}>BAR CHART</ColorTitle>
              <BarChart />
            </HomeWhiteBox>
          </Col>
          <Col span={10}>
            <HomeWhiteBox>
              <ColorTitle margin={'0 0 24px 0'}>TOP SELLING PRODUCT</ColorTitle>
              <TopSellingTable />
            </HomeWhiteBox>
          </Col>
          <Col span={7}>
            <HomeWhiteBox>
              <ColorTitle margin={'0 0 24px 0'}>DONUT CHART</ColorTitle>
              <DonutChart />
            </HomeWhiteBox>
          </Col>
          <Col span={7}>
            <HomeWhiteBox>
              <ColorTitle margin={'0 0 24px 0'}>RECENT ACTIVITY</ColorTitle>
              <Timeline>
                <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color='red'>
                  <p>Solve initial network problems 1</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item color='gray'>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item color='gray'>
                  <p>Technical testing 1</p>
                </Timeline.Item>
              </Timeline>
            </HomeWhiteBox>
          </Col>
        </Row>
      </HomePageWrapper>
    </DefaultLayout>
  )
}

HomePage.propTypes = {}

export default inject('commonStore')(observer(HomePage))