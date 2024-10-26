import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Business name',
  },
  {
    title: 'Business PAN',
  },
  {
    title: 'Email',
  },
  {
    title: 'Connection Type',
  },
  {
    title: 'Authorised By',
  },
  {
    title: 'Action 3',
    fixed: 'right',
    width: 90,
    render: () => <a>Action</a>,
  },
];

const App = () => {
  return (
    <Table
      bordered
      columns={columns}
      pagination={false}
    />
  );
};
export default App;