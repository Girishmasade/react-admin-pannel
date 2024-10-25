import React from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Pageroute from "../PageRoute/Pageroute";

const RouterContainer = () => {
  return (
    <Layout>
      <Content>
        <div style={{ minHeight: "100%", background: 'white' }}>
          <Pageroute/>
        </div>
      </Content>
    </Layout>
  );
};

export default RouterContainer;
