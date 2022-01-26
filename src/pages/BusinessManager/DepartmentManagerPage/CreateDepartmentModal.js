import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CreateDepartmentModalWrapper } from './DepartmentManagerPageStyled'
import { Button, Col, Descriptions, Divider, Form, Input, Modal, Row, Select } from 'antd'
import { RowCenterDiv } from '../../../components/CommonStyled/CommonStyled'
import { CheckSquareOutlined, SaveOutlined, StopOutlined } from '@ant-design/icons'
import ConditionRender from '../../../components/ConditionRender'

const CreateDepartmentModal = props => {
  const { visible, onClose } = props
  const [formCreateDepartment] = Form.useForm()
  const [isValidDepartment, setIsValidDepartment] = useState(false)

  const onFinish = (formCollection) => {
    console.log(formCollection)
  }
  const handlerSearchBusiness = (value, e) => {
    e.preventDefault()
    console.log(value)
    if (value) {
      setIsValidDepartment(true)
    } else {
      setIsValidDepartment(false)
    }
  }
  return (
    <CreateDepartmentModalWrapper>
      <Modal
        width={'60%'}
        style={{ top: '50px' }}
        maskClosable={false}
        onCancel={() => onClose()}
        footer={null}
        title='Thêm mới phòng ban doanh nghiệp'
        visible={visible}>
        <Form
          labelAlign={'left'}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          form={formCreateDepartment}
          onFinish={onFinish}
          colon={false}>
          <Form.Item label={'Số giấy tờ doanh nghiệp'}>
            <Input.Search enterButton onSearch={handlerSearchBusiness} />
          </Form.Item>
          <ConditionRender visible={isValidDepartment}>
            <Descriptions
              className={'mb-24'}
              labelStyle={{ width: '25%' }}
              bordered
              column={1}
              size={'small'}>
              <Descriptions.Item label={'Công ty'}>Công ty MBF</Descriptions.Item>
              <Descriptions.Item label={'Địa chỉ'}>Thái thịnh</Descriptions.Item>
            </Descriptions>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập tên phòng ban' }]}
              label={'Tên phòng ban'} name={'tenPhongBan'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập tên viết tắt' }]}
              label={'Tên viết tắt'} name={'tenVietTat'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn tài khoản sử dụng' }]}
              label={'Tài khoản sử dụng'} name={'taiKhoanSuDung'}>
              <Select placeholder={'Vui lòng chọn'} mode={'multiple'}>
                <Select.Option value={'1'}>Tài khoản 1</Select.Option>
                <Select.Option value={'2'}>Tài khoản 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={'Mô tả'} name={'moTa'}>
              <Input.TextArea rows={4} placeholder={'Nhập nội dung'} />
            </Form.Item>
            <RowCenterDiv>
              <Button className={'mr-16'}>Hủy</Button>
              <Button type={'primary'} htmlType={'submit'}><SaveOutlined /> Lưu thông tin</Button>
            </RowCenterDiv>
          </ConditionRender>
        </Form>
      </Modal>
    </CreateDepartmentModalWrapper>
  )
}

CreateDepartmentModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default CreateDepartmentModal