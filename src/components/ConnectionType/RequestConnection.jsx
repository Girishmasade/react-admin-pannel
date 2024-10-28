import {Divider, Modal, Steps, message } from "antd";
import { useState } from "react";
import ConnectionDetails from "./ConnectionDetails";
import DataAccess from "./DataAccess";

const { Step } = Steps;

const RequestConnection = () => {
  const [current, setCurrent] = useState(0);
  const [formDetails, setFormDetails] = useState(null);
  const [dataItem, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const onCompleteConnection = (values) => {
    setFormDetails(values);
    setCurrent(1);
  };

  const onDataAccess = (values) => {
    setData(values);
    setCurrent(2);
    message.success("Your data has been submitted successfully!");
  };

  const progressPercent = (current + 1) * 50;

  return (
    <div>
      <Modal title="Connection Type" current={setCurrent} open={isOpen} onCancel={() => setIsOpen(false)} footer={null}>
        <Divider />
        <Steps current={current} percent={progressPercent} style={{ color: "green" }}>
          <Step title="Connection" />
          <Step title="Data" />
        </Steps>
        {current === 0 && (
          <ConnectionDetails onFinish={onCompleteConnection} initialValues={formDetails} />
        )}
        {current === 1 && (
          <DataAccess onFinish={onDataAccess} initialValues={dataItem} />
        )}
      </Modal>
    </div>
  );
};

export default RequestConnection;
