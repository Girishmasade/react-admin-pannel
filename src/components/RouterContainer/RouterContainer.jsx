import React from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import PageRoutes from "../../../../admin-pannel/src/components/PageRoutes/PageRoutes";

const RouterContainer = () => {
  return (
    <Layout>
      <Content>
        <div style={{ minHeight: "100%", background: 'white' }}>
          <PageRoutes/>
        </div>
      </Content>
    </Layout>
  );
};

export default RouterContainer;
