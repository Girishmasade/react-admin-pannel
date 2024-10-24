import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdKey, IoMdBusiness } from "react-icons/io";
import {
  AppstoreOutlined,
  LineChartOutlined,
  UserOutlined,
  DownOutlined,
  SearchOutlined,
  FilterOutlined,
  BellOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Logo from "./Logo";
import RouterContainer from "../RouterContainer/RouterContainer";

const { Header, Content, Footer, Sider } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("/");

  useEffect(() => {
    const pathname = location.pathname;
    setSelectedKey(pathname);
  }, [location.pathname]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="w-full min-h-screen">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        className="bg-white border"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="ml-4 p-2">
          <Logo />
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          className="relative hover:text-green-500"
          onClick={(item) => {
            navigate(item.key);
          }}
          selectedKeys={[selectedKey]}
          items={[
            {
              label: "Dashbaord",
              icon: <AppstoreOutlined />,
              key: "/",
            },
            {
              label: "Connected Business",
              key: "/connected",
              icon: <FaHandsHelping />,
            },
            {
              label: "Authorised Business",
              key: "/authorised",
              icon: <IoMdKey />,
            },
            {
              label: "My business",
              key: "/mybusiness",
              icon: <IoMdBusiness />,
            },
            {
              label: "Reports",
              key: "/reports",
              icon: <LineChartOutlined />,
            },
            {
              label: "User Management",
              key: "/usermanagement",
              icon: <UserOutlined />,
            },
          ]}
        ></Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "white",
          }}
        >
          <div className="flex justify-between">
            <h1 className="font-medium text-lg p-4 ml-6">
              Wonka Industries <DownOutlined className="pl-2" />
            </h1>
            <div className="pr-4 flex gap-4 text-lg">
              <BellOutlined />
              <ClockCircleOutlined className="text-green-500" />
            </div>
          </div>
        </Header>
        <hr />
        <Header
          style={{
            padding: 0,
            height: 100,
            background: "white",
          }}
        >
          <div className="flex flex-col">
            <div className="grid grid-rows-2">
              <h1 className="font-bold text-lg p-4 ml-6">
                Authorised Businesses
              </h1>
              <div className="flex relative bottom-6 gap-4 left-10">
                <p className="underline text-green-500">
                  <a href="#" className="hover:text-green-500">
                    Authorised
                  </a>
                </p>
                <a href="#" className="hover:text-green-500">
                  Requests
                </a>
              </div>
            </div>
          </div>
         </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div className="md:flex m-3 gap-4">
            <div className="border-gray-200 bg-white flex border outline-none h-8">
              <input
                type="search"
                className=" outline-none w-52 pl-2"
                placeholder="search business name.."
              />{" "}
              <p className="pt-1">|</p>
              <button className="bg-white pl-2 pr-2 overflow-hidden">
                <SearchOutlined className="" />
              </button>
            </div>
            <button className="pl-4 pr-2 border bg-white hover:text-green-600">
              <FilterOutlined className="pr-1" /> Filters
            </button>
          </div>
          <div
            style={{
              minHeight: "100%",
              background: "white",
              borderRadius: borderRadiusLG,
            }}
          >
            
          </div>
        </Content>
        <Footer>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Navbar;
