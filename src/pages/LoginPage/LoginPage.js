import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import AuthLayout from '../../layouts/AuthLayout'
import { Form, message } from 'antd'
import { LoginPageWrapper } from './LoginPageStyled'
import { useHistory } from 'react-router-dom'
import * as forge from 'node-forge'
import { PUBLIC_KEY } from '../../utils/constant'
import stringUtils from '../../utils/stringUtils'

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

      </LoginPageWrapper>
    </AuthLayout>
  )
}

LoginPage.propTypes = {}

export default inject('commonStore', 'authenticationStore')(observer(LoginPage))