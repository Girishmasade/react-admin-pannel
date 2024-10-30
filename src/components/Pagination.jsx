import React from 'react';
import { Pagination } from 'antd';
const Page = () => (
  <Pagination
    total={1200}
    showSizeChanger
    showQuickJumper
    align="end"
  />
);
export default Page;