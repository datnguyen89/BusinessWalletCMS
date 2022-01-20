import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { BusinessUserManagerTabWrapper } from './Business_ApproveBusinessPageStyled'
import { Col, Form, Row, DatePicker, Input } from 'antd'

const { RangePicker } = DatePicker

const Business_UserManagerTab = props => {
  const { commonStore } = props
  const { appTheme } = commonStore

  const [formFilterBusinessUser] = Form.useForm()

  const onFinish = (formCollection) => {
    console.log(formCollection)
  }
  return (
    <BusinessUserManagerTabWrapper>
      <Form
        labelAlign={'left'}
        labelCol={{ span: 6 }}
        colon={false}
        onFinish={onFinish}
        form={formFilterBusinessUser}>
        <Row justify={'space-between'} gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item label={'Thời gian tạo'} name={'dateRangeCreated'}>
              <RangePicker format='DD/MM/YYYY' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={'Số giấy tờ/MST DN'} name={'MST'}>
              <Input placeholder={'Số giấy tờ/MST DN'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={'Tên đăng nhập'} name={'username'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={'Người tạo'} name={'usercreated'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </BusinessUserManagerTabWrapper>
  )
}

Business_UserManagerTab.propTypes = {}
export default inject('commonStore')(observer(Business_UserManagerTab))
