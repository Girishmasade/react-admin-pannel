import { Divider, Modal, Steps } from "antd";
import { useState } from "react";
import ConnectionDetails from "./ConnectionDetails";
import DataAccess from "./DataAccess";
import '../../App.css'

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
  };

  const Close = () => {
    setIsOpen(false)
  }

  const progressPercent = (current + 1) * 50;

  return (
    <div>
      <Modal title="Connection Type" open={isOpen} onCancel={Close} footer={null}>
        <Divider />
        <Steps current={current} percent={progressPercent} className="custom-steps">
          <Step title="Connection" className="custom-steps"/>
          <Step title="Data" className="custom-steps"/>
        </Steps>
        {current === 0 && (
          <ConnectionDetails onFinish={onCompleteConnection} initialValues={formDetails} Close={Close}/>
        )}
        {current === 1 && (
          <DataAccess onFinish={onDataAccess} initialValues={dataItem} Close={Close}/>
        )}
      </Modal>
    </div>
  );
};

export default RequestConnection;
