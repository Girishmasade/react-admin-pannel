import React, { useState } from "react";
import { Table, Tag } from "antd";
import UserData from "../components/Userdata/UserData";
const { Column } = Table;
const data = [
  {
    key: "1",
    name: "Wonka Industries",
    Pan: "ABCDE1234F",
    Email: "johndoe@gmail.com",
    connection: "Vendor",
    sent: "John Doe",
  },
  {
    key: "2",
    name: "Deepesh Khatri and Associates",
    Pan: "ABCDE1234F",
    Email: "samplename@gmail.com",
    connection: "Vendor",
    sent: "Jenny Wilson",
  },
  {
    key: "3",
    name: "Mentor",
    Pan: "ABCDE1234F",
    Email: "samplename@gmail.com",
    connection: "Customer",
    sent: "Kristin Watson",
  },
  {
    key: "4",
    name: "The Career Coach",
    Pan: "ABCDE1234F",
    Email: "samplename@gmail.com",
    connection: "Vendor",
    sent: "Floyd Miles",
  },
  {
    key: "5",
    name: "Roll It Up",
    Pan: "ABCDE1234F",
    Email: "samplename@gmail.com",
    connection: ["Vendor", "Customer"],
    sent: "Darlene Robertson",
  },
  {
    key: "6",
    name: "Shimmering Beauty",
    Pan: "ABCDE1234F",
    Email: "samplename@gmail.com",
    connection: ["Vendor", "Customer"],
    sent: "Robert Fox",
  },
  {
    key: "7",
    name: "Squeaky Clean",
    Pan: "ABCDE1234F",
    Email: "samplename@gmail.com",
    connection: "Customer",
    sent: "Brooklyn Simmons",
  },
  {
    key: "8",
    name: "Phoenix",
    Pan: "ABCDE1234F",
    Email: "samplename@gmail.com",
    connection: "Customer",
    sent: "Eleanor Pena",
  },
  {
    key: "9",
    name: "Operify",
    Pan: "ABCDE1234F",
    Email: "samplename@gmail.com",
    connection: "Customer",
    sent: "Albert Flores",
  },
  {
    key: "10",
    name: "Squeaky Clean",
    Pan: "ABCDE1234F",
    Email: "samplename@gmail.com",
    connection: "Customer",
    sent: "Brooklyn Simmons",
  },
];

const AuthorisedBusiness = () => {

const [selectedUser, setSelectedUser] = useState(false)

const handleView = () => {
  setSelectedUser(true)
}

  return (
    <>
     <Table dataSource={data} pagination={false}>
    <Column title="Business name" dataIndex="name" key="name" />
    <Column title="Business PAN" dataIndex="Pan" key="Pan" />
    <Column title="Email" dataIndex="Email" key="Email" />
    
    <Column
      title="Connection Type"
      dataIndex="connection"
      key="connection"
      render={(tags) => (
        <>
          {(Array.isArray(tags) ? tags : [tags]).map((tag) => {
            let color = tag.length > 5 ? "red" : "green";
            if (tag === "Vendor") {
              color = "blue";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )}
    />
    <Column title="Authorised By" dataIndex="sent" key="sent" />
    <Column
      title="Action"
      key="action"
      render={() => <a className="text-blue-500" onClick={handleView}>view</a>}
    />
  </Table>
      {
        selectedUser && <UserData/>
      }
    </>
  )
}
export default AuthorisedBusiness;
