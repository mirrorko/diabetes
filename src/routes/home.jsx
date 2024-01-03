import { Avatar, Flex, Space, Layout, Menu, Button, Row, Col } from "antd";
import React, { useState, useRef } from "react";

import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import { navItems } from "../nav";
import Footer from "./footer";
import logo from "../logo.svg";
import mobile from "../mobile.svg";

import { contentStyle, siderStyle } from "../headerStyle";
import "../App.css";
import "./layout.css";
import "./home.css";
const { Sider, Content } = Layout;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [current, setCurrent] = useState("home");
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
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
          {windowSize.current[0] > 600 && (
            <Sider style={siderStyle} className="user">
              <img className="logo" alt="fire" src={logo} />
              <Flex
                gap="middle"
                align="center"
                justify="center"
                vertical
                id="hoverAvatar"
              >
                <Avatar size={64} icon={<UserOutlined />} className="avatar" />
                <div className="name">Hi,Ching-Ya.</div>
              </Flex>
            </Sider>
          )}

          <Layout>
            {windowSize.current[0] <= 600 ? (
              <Row className="logoPart">
                <Col span={20}>
                  <img className="logo" alt="fire" src={logo} />
                </Col>
                <Col span={4}>
                  <Button
                    type="text"
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: "16px",
                      width: 64,
                      height: 64,
                    }}
                  />
                </Col>
              </Row>
            ) : (
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={navItems}
              />
            )}
            {collapsed && (
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={navItems}
              />
            )}
            <Content style={contentStyle}>
              <div className="info">
                <img className="mobile" src={mobile} alt="mobile" />
                <span className="slogan">Diabetes on the Go!</span>
              </div>
            </Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
}
