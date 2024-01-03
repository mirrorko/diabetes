import { Avatar, Flex, Space, Layout, Menu } from "antd";
import React, { useState } from "react";

import { UserOutlined } from "@ant-design/icons";

import { navItems } from "../nav";
import Footer from "./footer";
import logo from "../logo.svg";

import { headerStyle, contentStyle, siderStyle } from "../headerStyle";
import "../App.css";
import "./layout.css";
const { Header, Sider, Content } = Layout;

export default function Mylayout(content) {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="App">
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout>
          <Sider style={siderStyle} className="user">
            <img className="logo" alt="fire" src={logo} />
            <Flex
              gap="middle"
              align="center"
              justify="center"
              vertical
              id="hoverAvatar"
            >
              <Avatar size={64} icon={<UserOutlined />} class="avatar" />
              <div className="name">Hi,Ching-Ya.</div>
            </Flex>
          </Sider>

          <Layout>
            <Header style={headerStyle}>
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={navItems}
              />
            </Header>
            <Content style={contentStyle}>{content}</Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
}
