import React, { useState } from 'react';
import {CheckCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd';
const RequestMessage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal title="Request confirmation" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="flex gap-2 p-4">
          <p><CheckCircleOutlined className='text-3xl text-green-500'/></p>
        <p className='text-xl'>Request has been sent <b>successfully</b></p>
        </div>
        <hr />
      </Modal>
    </>
  );
};
export default RequestMessage;