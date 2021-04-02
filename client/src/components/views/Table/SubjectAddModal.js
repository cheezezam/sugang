import React, { useState } from "react";
import { Button, Modal } from "antd";

function SubjectAddModal() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        강의 추가하기
      </Button>
      <Modal
        visible={visible}
        title="강의 추가"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="danger" onClick={handleCancel}>
            취소
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            확인
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default SubjectAddModal;
