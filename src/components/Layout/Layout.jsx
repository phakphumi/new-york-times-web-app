import React from 'react';
import {
  Layout as AntdLayout,
  Breadcrumb,
  Row,
  Col,
 } from 'antd';
import styles from './Layout.module.scss';
import SearchBox from '../SearchBox/SearchBox';
const { Header, Content, Footer } = AntdLayout;

export default function Layout() {
  return (
    <AntdLayout className="layout">
      <Header className={styles.header}>
        <Row align="middle">
          <Col md={12}>
            <div className={styles.logo}>
              7 Peaks News
            </div>
          </Col>
          <Col md={12}>
            <SearchBox />
          </Col>
        </Row>
      </Header>
      <Content className={styles.content}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.siteLayoutContent}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </AntdLayout>
  );
}
