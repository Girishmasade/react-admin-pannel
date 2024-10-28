import { Button, Divider, Form} from "antd"

const ConnectionDetails = ({ onFinish, initialValues, onclose }) => {
  return (
    <div>
      <div>
        <h1>REQUEST CONNECTION TO</h1>
        <Divider/>
        <Form   onFinish={onFinish}
                initialValues={initialValues}
                layout="vertical"
                className="flex gap-1 flex-wrap"
              >
                <Form.Item
                  label={<span className="text-xs">First Name</span>}
                  name="name"
                >
                  <input
                    type="text"
                    className="border w-[200px] p-1"
                    defaultValue="John"
                  />
                </Form.Item>
                <Form.Item
                  label={<span className="text-xs">Last Name</span>}
                  name="lastname"
                  className="pl-3"
                >
                  <input
                    type="text"
                    className="border w-[200px] p-1"
                    defaultValue="Doe"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-xs">Business Name</span>}
                  name="businessname"
                >
                  <input
                    type="text"
                    className="border p-1 w-[450px]"
                    defaultValue="Wonka Industries"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-xs">Business PAN</span>}
                  name="businesspan"
                >
                  <input
                    type="text"
                    className="border p-1 w-[200px]"
                    defaultValue="ABCDE1234F"
                    disabled
                  />
                </Form.Item>

                <Form.Item label="Email" name="email" className="pl-3">
                  <input
                    type="email"
                    className="border p-1 w-[200px]"
                    defaultValue="johndoe@gmail.com"
                  />
                </Form.Item>
                
              </Form>
           
            <h1>Connection Type</h1>
            <hr />
            <div className="flex pt-2 gap-4 cursor-pointer">
                <label htmlFor="vendor" className="flex gap-1">
                    <input type="checkbox" name="vendor" id="vendor" checked/>
                    Vendor
                </label>
                <label htmlFor="client" className="flex gap-1">
                    <input type="checkbox" name="client" id="client" />
                    Client
                </label>
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
      </div>
      <div className="flex justify-end gap-2">
        <Button>cancel</Button>
        <Button className="bg-green-500 hover:bg-green-400">Next</Button>
      </div>
    </div>
  )
}

export default ConnectionDetails
