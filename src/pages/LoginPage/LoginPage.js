import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import AuthLayout from '../../layouts/AuthLayout'
import { Button, Col, Form, Input, message, Row } from 'antd'
import { AuthShadowBox } from '../../components/CommonStyled/CommonStyled'
import IMAGES from '../../images'
import { LoginFormTitle, LoginPageWrapper, TitleWrapper } from './LoginPageStyled'
import { Link, useHistory } from 'react-router-dom'
import OtpModal from '../../components/OtpModal'
import * as forge from 'node-forge'
import { PUBLIC_KEY } from '../../utils/constant'
import { StringUtils } from '@azure/msal-browser'
import stringUtils from '../../utils/stringUtils'
import validator from '../../validator'

const LoginPage = props => {
  const { commonStore, authenticationStore } = props
  const history = useHistory()
  const [formLogin] = Form.useForm()
  const [visibleOtp, setVisibleOtp] = useState(false)

  const onFinish = (formCollection) => {
    setVisibleOtp(true)
    var rsa = forge.pki.publicKeyFromPem(PUBLIC_KEY);
    formCollection.password = window.btoa(rsa.encrypt(formCollection.password));

    authenticationStore.userLogin(formCollection);
    console.log('Success:', formCollection)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleSubmitOtp = (otp) => {
    if (otp === '123456') {
      history.push(PAGES.HOME.PATH)
    } else {
      message.error('Mã OTP không đúng')
    }
  }

  const handleChangeUsername = (e) => {
    let inputText = e.currentTarget.value.trim().replaceAll(' ','');
    if (inputText.length === 0) return
    inputText = stringUtils.removeVietnameseCharMark(inputText)
    formLogin.setFieldsValue({
      username: inputText
    })
  }

  return (
    <AuthLayout>
      <LoginPageWrapper>
        <AuthShadowBox color={commonStore.appTheme.solidColor}>
          <TitleWrapper>
            <img src={IMAGES.AUTH_LOGO} alt={''} />
            <LoginFormTitle>ĐĂNG NHẬP MOBIFONE PAY DOANH NGHIỆP</LoginFormTitle>
          </TitleWrapper>
          <Form
            form={formLogin}
            name='basic'
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label=''
              name='username'
              rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
            >
              <Input size={'large'} className={'auth-input'} onChange={handleChangeUsername} placeholder={'Tên đăng nhập'} />
            </Form.Item>

            <Form.Item
              label=''
              name='password'
              rules={[{ validator: validator.validateLoginPassword }]}
            >
              <Input.Password size={'large'} className={'auth-input'} placeholder={'Mật khẩu'} />
            </Form.Item>

            <Form.Item>
              <Row align={'middle'}>
                <Col span={12}>
                  <Link to={'/forgot-password'}>Quên mật khẩu</Link>
                </Col>
                <Col span={12}>
                  <Button type='primary' htmlType='submit' size={'large'} block>
                    Đăng nhập
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </AuthShadowBox>
        <OtpModal
          phoneNumber={'0379631004'}
          visible={visibleOtp}
          onCancel={() => setVisibleOtp(false)}
          callbackOtp={handleSubmitOtp} />
      </LoginPageWrapper>
    </AuthLayout>
  )
}

LoginPage.propTypes = {}

export default inject('commonStore', 'authenticationStore')(observer(LoginPage))