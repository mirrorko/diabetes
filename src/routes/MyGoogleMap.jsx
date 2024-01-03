import React, { useState, useRef } from "react";
import {} from "react-router-dom";

import { Avatar, Flex, Space, Layout, Menu, Button, Row, Col } from "antd";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { contentStyle, siderStyle } from "../headerStyle";

import Footer from "./footer";
import { navItems } from "../nav";
import logo from "../logo.svg";

const { Sider, Content } = Layout;
const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 52.485213,
  lng: -1.884783,
};

export default function MyGoogleMap() {
  const [current, setCurrent] = useState("hospital");
  const [collapsed, setCollapsed] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDJ3PWUQjw1RHtRMEwDIViuS8S5HG3si_I",
  });

  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
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
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={14}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  {/* Child components, such as markers, info windows, etc. */}
                  <></>
                </GoogleMap>
              ) : (
                <></>
              )}
            </Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
}
