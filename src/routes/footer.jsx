import React from "react";

import { Col, Row, Layout } from "antd";
import { footerStyle } from "../headerStyle";
import "./footer.css";

const { Footer } = Layout;

export default function footer() {
  return (
    <Footer style={footerStyle}>
      <Row>
        <Col span={24}>
          <a href="/contacts">Contant Us</a>
        </Col>
        <Col span={24}>
          <a href="/faq">FAQ</a>
        </Col>
      </Row>
    </Footer>
  );
}
