import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import { Descriptions, message } from 'antd'
import OtpModal from '../OtpModal'
import SuccessModal from '../SuccessModal'
import PropTypes from 'prop-types'
import { ModalCustom, ResultSearchForm } from './ModalCustomCommandFormStyled'

const _ = require('lodash')

const ModalCustomCommandForm = props => {

  const { title, fields, visible, setIsModalVisible } = props
  const [visibleOtp, setVisibleOtp] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [items, setItems] = useState([]);
  const [ resultSuccess, setResultSuccess ] = useState(false);


  const handleOk = () => {
    setVisibleOtp(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSuccessActiveCommand = () => {
    setVisibleSuccess(false)
  }

  const handleSubmitOtp = (otp) => {
    if (otp === '123456') {
      setVisibleSuccess(true);
      setResultSuccess(true);
    } else {
      message.error('OTP không chính xác')
    }
  }

  const handleSetVisibleOtp = () => {
    setVisibleOtp(false);
  }

  useEffect(() => {
    if (!visibleOtp && resultSuccess) {
      setIsModalVisible(false);
      // reset state
      setResultSuccess(false);
      setVisibleSuccess(false);
      setVisibleOtp(false);
    }
  }, [visibleOtp])


  useEffect(() => {
    if (!visibleSuccess) {
      setVisibleOtp(false);
    }
  }, [visibleSuccess])

  useEffect(() => {
    if (fields) {
      let arr = [];
      Object.keys(fields).map(function(key,index) {
        arr.push(<Descriptions.Item key={index} label={key} labelStyle={{width: "35%"}}>{fields[key]}</Descriptions.Item>)
      });
      setItems(arr);
    }
  }, [fields])

  return (
    <ModalCustom title={title} visible={visible} onOk={handleOk} onCancel={handleCancel} width={764} okText={"Xác nhận"} maskClosable={"true"} closable={true}>
      <ResultSearchForm>
        <Descriptions bordered column={1}>
          {items}
        </Descriptions>
      </ResultSearchForm>
      <OtpModal
        phoneNumber={'0379631004'}
        callbackOtp={handleSubmitOtp}
        visible={visibleOtp}
        onCancel={() => handleSetVisibleOtp()} />
      <SuccessModal visible={visibleSuccess} description={'Bạn đã lập lệnh thành công'}
                    callbackSuccess={handleSuccessActiveCommand} />
    </ModalCustom>
  )
}

ModalCustomCommandForm.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.any
}

export default inject('mobileNetworkOperatorStore')(observer(ModalCustomCommandForm))