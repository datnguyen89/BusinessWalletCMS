import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'
import TransactionResult from '../../components/TransactionResult'
import { Button } from 'antd'


const ProtectedPage = props => {

  const [timeLeft, setTimeLeft] = useState(0)
  const [showModal, handleShowModal] = useState(false)

  const handleCallbackTransResult = (stt) => {
    handleShowModal(stt);
  }

  const infoModel = {
    countMoney: '130.000.000 đ',
    transactionCode: '123456789',
    transactionTime: moment('2020/11/04 03:20').format('HH:mm DD/MM/YYYY'),
  }
  const turnOver = () => {
    handleShowModal(true);
  }

  useEffect(() => {
    if (!timeLeft) return
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeLeft])

    return (
        <div>
          <div>
            {timeLeft === 0 ? <a onClick={() => setTimeLeft(3)}>reset</a> : timeLeft}
          </div>
          <Button onClick={turnOver}>Bật modal kết quả giao dịch</Button>
          <TransactionResult
            visible={showModal}
            status='success'
            title='Giao dịch thành công'
            callbackTransResult={handleCallbackTransResult}
            infoModel={infoModel}></TransactionResult>
        </div>
    );
};

ProtectedPage.propTypes = {
    
};

export default ProtectedPage;