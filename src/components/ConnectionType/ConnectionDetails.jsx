import { Button, Divider, Form, Input } from "antd";
import { Checkbox } from "antd";
import "../../App.css";
import { useState } from "react";

const ConnectionDetails = ({ onFinish, initialValues, Close }) => {
   
  const [checked, setChecked] = useState(false); 
  const handleChange = (e) => { setChecked(e.target.checked); };

  const plainOptions = ["Vendor", "Client"];

  return (
    <div>
      <h1 className="pt-4">REQUEST CONNECTION TO</h1>
      <Divider />
      <Form
        onFinish={onFinish}
        initialValues={initialValues}
        layout="vertical"
        className="flex gap-1 flex-wrap"
      >
        <Form.Item label="First Name" name="name">
          <Input
            type="text"
            className="border w-[200px] p-1"
            defaultValue="John"
          />
        </Form.Item>
        <Form.Item label="Last Name" name="lastname" className="pl-3">
          <Input
            type="text"
            className="border w-[200px] p-1"
            defaultValue="Doe"
          />
        </Form.Item>
        <Form.Item label="Business Name" name="businessname">
          <Input
            type="text"
            className="border p-1 w-[450px]"
            defaultValue="Wonka Industries"
          />
        </Form.Item>
        <Form.Item label="Business PAN" name="businesspan">
          <Input
            type="text"
            className="border p-1 w-[200px]"
            defaultValue="ABCDE1234F"
            disabled
          />
        </Form.Item>
        <Form.Item label="Email" name="email" className="pl-3">
          <Input
            type="email"
            className="border p-1 w-[200px]"
            defaultValue="johndoe@gmail.com"
          />
        </Form.Item>
        <div className="pt-4">
          <h1>Connection Type</h1>
          <hr />
          <div className="flex pt-2 gap-4 cursor-pointer">
            <Checkbox.Group
            className={checked ? 'checkbox-checked' : ''}
              options={plainOptions}
              defaultValue={['Vendor']}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="pt-4">
          <h1>Message(Optional)</h1>
          <hr />
          <textarea
            name="textarea"
            placeholder="Enter"
            className="w-[450px] p-2 mt-2 border"
          />
        </div>
        <div className=" flex gap-2 relative left-[20rem]">
          <Button onClick={Close}>Cancel</Button>
          <Button
            type="success"
            htmlType="submit"
            className="bg-green-500 text-white hover:bg-green-400"
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ConnectionDetails;
