import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import AuthLayout from '../../../layouts/AuthLayout'
import { Button, Checkbox, Col, Divider, Form, Input, message, Row } from 'antd'
import { FormLoginWrapper, LoginDescription, LoginPageWrapper, LoginTitle } from './LoginPageStyled'
import { useHistory, useLocation } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { ColorLink } from '../../../components/CommonStyled/CommonStyled'
import { APP_CLIENT_ID, PAGES } from '../../../utils/constant'
import OtpModal from '../../../components/OtpModal'

const LoginPage = props => {
  const { commonStore, authenticationStore } = props
  const { appLoading } = commonStore
  const history = useHistory()
  const location = useLocation()
  const [formLogin] = Form.useForm()

  const [visibleOtp, setVisibleOtp] = useState(false)
  const [currPayload, setCurrPayload] = useState({})
  const [extendData, setExtendData] = useState('')

  const onFinish = (formCollection) => {
    console.log(formCollection)
    if (appLoading) return
    // admin1
    // 123456
    let payload = {
      ExtendData: '',
      ActiveCode: '',
      UserName: formCollection.userName,
      Password: formCollection.password,
      ClientId: APP_CLIENT_ID,
    }
    authenticationStore.userLogin(payload)
      .then(res => {
        switch (res?.responseCode) {
          case 0:
            history.push(location?.state?.from || PAGES.HOME.PATH)
            break
          case -52:
            payload.Description = res?.description
            setCurrPayload(payload)
            setVisibleOtp(true)
            setExtendData(res?.extendData)
            break
          default:
            message.error(res?.description)
            break
        }
      })
  }

  const handleSubmitOtp = (otp) => {
    let payload = {
      ExtendData: extendData,
      ActiveCode: otp,
      UserName: currPayload.UserName,
      Password: currPayload.Password,
      ClientId: APP_CLIENT_ID,
    }
    authenticationStore.activeDevice(payload)
      .then(res => {
        switch (res?.responseCode) {
          case 0:
            setCurrPayload({})
            setExtendData('')
            history.push(location?.state?.from || PAGES.HOME.PATH)
            break
          case -10105:
          case -1:
            message.error(res?.description)
            setVisibleOtp(false)
            setCurrPayload({})
            setExtendData('')
            formLogin.resetFields()
            break
          default:
            message.error(res?.description)
            break
        }
      })
  }
  const handleCancelOtp = () => {
    setVisibleOtp(false)
    setCurrPayload({})
    setExtendData('')
  }

  return (
    <>
      <LoginPageWrapper>
        <LoginTitle color={commonStore.appTheme.solidColor}>CMS doanh nghiệp</LoginTitle>
        <LoginDescription>Đăng nhập hệ thống quản lý ví doanh nghiệp</LoginDescription>
        <FormLoginWrapper>
          <Form form={formLogin}
                onFinish={onFinish}
                size={'large'}
                colon={false}
                labelAlign={'left'}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
            <Form.Item label={'Tên đăng nhập'} name={'userName'}>
              <Input prefix={<UserOutlined />} placeholder={'Tên đăng nhập'} />
            </Form.Item>
            <Form.Item label={'Mật khẩu'} name={'password'}>
              <Input.Password prefix={<LockOutlined />} placeholder={'Mật khẩu'} />
            </Form.Item>
            <Divider />
            <Row>
              <Col span={12}>
                <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 0, span: 24 }}>
                  <Checkbox>Lưu thông tin</Checkbox>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item wrapperCol={{ offset: 0, span: 24 }} style={{ textAlign: 'right' }}>
                  <ColorLink color={commonStore.appTheme.solidColor} to={'#'}>Quên mật khẩu ?</ColorLink>
                </Form.Item>
              </Col>
            </Row>
            <Button block type={'primary'} htmlType={'submit'}>Đăng nhập</Button>
          </Form>
        </FormLoginWrapper>
        <OtpModal
          phoneNumber={''}
          description={currPayload.Description}
          visible={visibleOtp}
          onCancel={handleCancelOtp}
          callbackOtp={handleSubmitOtp} />
      </LoginPageWrapper>
    </>
  )
}

LoginPage.propTypes = {}

export default inject('commonStore', 'authenticationStore')(observer(LoginPage))