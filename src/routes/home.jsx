import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Avatar, Flex, Space, Layout, Menu, Button, Row, Col } from "antd";
import { debounce } from "lodash";

import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import { AppContext } from "./appContext";

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [current, setCurrent] = useState("home");
  const toggleCollapsed = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);
  const onClick = useCallback((e) => {
    console.log("click ", e);
    setCurrent(e.key);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      debounce(() => {
        setWindowWidth(window.innerWidth);
      })
    );
  }, []);

  const contextValue = useMemo(() => {
    return {
      windowWidth,
    };
  }, [windowWidth]);

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
          size={[0, 48]}
        >
          <Layout>
            {windowWidth > 620 && (
              <Sider style={siderStyle} className="user">
                <img className="logo" alt="fire" src={logo} />
                <Flex
                  gap="middle"
                  align="center"
                  justify="center"
                  vertical
                  id="hoverAvatar"
                >
                  <Avatar
                    size={64}
                    icon={<UserOutlined />}
                    className="avatar"
                  />
                  <div className="name">Hi,Ching-Ya.</div>
                </Flex>
              </Sider>
            )}

            <Layout>
              {windowWidth <= 620 ? (
                <>
                  <Row className="logoPart">
                    <Col span={20}>
                      <img className="logo" alt="fire" src={logo} />
                    </Col>
                    <Col span={4}>
                      <Button
                        type="text"
                        icon={
                          collapsed ? (
                            <MenuUnfoldOutlined />
                          ) : (
                            <MenuFoldOutlined />
                          )
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
                  {collapsed && (
                    <Menu
                      onClick={onClick}
                      selectedKeys={[current]}
                      mode="horizontal"
                      items={navItems}
                    />
                  )}
                </>
              ) : (
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
    </AppContext.Provider>
  );
}
