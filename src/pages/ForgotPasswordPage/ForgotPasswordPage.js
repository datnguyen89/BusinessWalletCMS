import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import AuthLayout from '../../layouts/AuthLayout'
import { Input, Form, Checkbox, Button, Row, Col, message } from 'antd'
import { AuthShadowBox } from '../../components/CommonStyled/CommonStyled'
import IMAGES from '../../images'
import {
  ErrorLabel,
  ForgotPasswordFormTitle,
  ForgotPasswordPageWrapper, InfoLabel,
  TitleWrapper,
} from './ForgotPasswordPageStyled'
import { Link, useHistory } from 'react-router-dom'
import OtpModal from '../../components/OtpModal'
import SuccessModal from '../../components/SuccessModal'

const ForgotPasswordPage = props => {
  const history = useHistory()
  const [formVerify] = Form.useForm()
  const [formResetPassword] = Form.useForm()

  const [processStep, setProcessStep] = useState(0)
  const [visibleOtp, setVisibleOtp] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)

  const onFinishVerify = (formCollection) => {
    console.log('Success:', formCollection)
    setProcessStep(1)
  }
  const onFinishFailedVerify = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinishResetPassword = (formCollection) => {
    setVisibleOtp(true)
    console.log('Success:', formCollection)
  }
  const onFinishFailedResetPassword = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleSubmitOtp = (otp) => {
    if (otp === '123456') {
      setVisibleOtp(false)
      setVisibleSuccess(true)
    } else {
      message.error('OTP không chính xác')
    }
  }

  const handleCloseSuccessModal = () => {
    setVisibleSuccess(false)
    history.push('/login')
  }

  const handleClickBackLogin = () => {
    formVerify.resetFields()
    history.push('/login')
  }
  const handleClickBackVerify = () => {
    formResetPassword.resetFields()
    setProcessStep(0)
  }

  return (
    <AuthLayout>
      <ForgotPasswordPageWrapper>
        <AuthShadowBox>
          <TitleWrapper>
            <img src={IMAGES.AUTH_LOGO} alt={''} />
            <ForgotPasswordFormTitle>KHÔI PHỤC MẬT KHẨU</ForgotPasswordFormTitle>
          </TitleWrapper>
          {
            processStep === 0 &&
            <Form
              form={formVerify}
              name='basic'
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinishVerify}
              onFinishFailed={onFinishFailedVerify}
              autoComplete='off'
            >
              <Form.Item
                label=''
                name='companyAccount'
                rules={[{ required: true, message: 'Vui lòng nhập số tài khoản doanh nghiệp' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Số tài khoản doanh nghiệp'} />
              </Form.Item>

              <Form.Item
                label=''
                name='username'
                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Tên đăng nhập'} />
              </Form.Item>

              <Form.Item
                label=''
                name='passport'
                rules={[{ required: true, message: 'Vui lòng nhập số CMND/CCCD/Hộ Chiếu' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Số CMND/CCCD/Hộ Chiếu'} />
              </Form.Item>

              <Form.Item
                label=''
                name='phoneNumber'
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại User' }]}
              >
                <Input size={'large'} className={'auth-input'} placeholder={'Số điện thoại User'} />
              </Form.Item>
              <Form.Item>
                <InfoLabel>* Vui lòng nhập đầy đủ thông tin để lấy lại mật khẩu</InfoLabel>
              </Form.Item>

              <Form.Item>
                <Row align={'middle'} justify={'space-between'}>
                  <Col span={11}>
                    <Button type='default' size={'large'} block onClick={handleClickBackLogin}>
                      Về đăng nhập
                    </Button>
                  </Col>
                  <Col span={11}>
                    <Button type='primary' htmlType='submit' size={'large'} block>
                      Tiếp theo
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          }
          {
            processStep === 1 &&
            <Form
              form={formResetPassword}
              name='basic'
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinishResetPassword}
              onFinishFailed={onFinishFailedResetPassword}
              autoComplete='off'
            >
              <Form.Item>
                <ErrorLabel>
                  * Vui lòng đặt mật khẩu gồm cả số và chữ, tối thiểu 8 ký tự và chứa ký tự đặc biệt
                </ErrorLabel>
              </Form.Item>
              <Form.Item
                label=''
                name='password'
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới' }]}
              >
                <Input.Password size={'large'} className={'auth-input'} placeholder={'Mật khẩu mới'} />
              </Form.Item>
              <Form.Item
                label=''
                dependencies={['password']}
                name='confirmPassword'
                rules={[
                  { required: true, message: 'Vui lòng nhập lại mật khẩu mới' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(new Error('Mật khẩu xác nhận không trùng khớp'))
                    },
                  }),
                ]}
              >
                <Input.Password size={'large'} className={'auth-input'} placeholder={'Xác nhận mật khẩu mới'} />
              </Form.Item>
              <Form.Item>
                <Row align={'middle'} justify={'space-between'}>
                  <Col span={11}>
                    <Button type='default' size={'large'} block onClick={handleClickBackVerify}>
                      Về bước trước
                    </Button>
                  </Col>
                  <Col span={11}>
                    <Button type='primary' htmlType='submit' size={'large'} block>
                      Tiếp theo
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          }
        </AuthShadowBox>
        <OtpModal
          phoneNumber={'0379631004'}
          callbackOtp={handleSubmitOtp}
          visible={visibleOtp}
          onCancel={() => setVisibleOtp(false)} />
        <SuccessModal
          title={'Thông báo'}
          description={<span>Quý khách lấy lại mật khẩu thành công.<br /> Vui lòng đăng nhập lại</span>}
          visible={visibleSuccess}
          callbackSuccess={handleCloseSuccessModal} />
      </ForgotPasswordPageWrapper>
    </AuthLayout>
  )
}

ForgotPasswordPage.propTypes = {}

export default ForgotPasswordPage