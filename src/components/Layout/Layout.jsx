import {
  Col,
  Layout as AntdLayout,
  Row,
} from 'antd';
import { node } from 'prop-types';
import React from 'react';

import styles from './Layout.module.scss';

const { Header, Content, Footer } = AntdLayout;

function Layout({ children }) {
  return (
    <AntdLayout className="layout">
      <Header className={styles.header}>
        <Row justify="center" align="middle">
          <Col>
            <div className={styles.logo}>
              7 Peaks News
            </div>
          </Col>
        </Row>
      </Header>
      <Content className={styles.content}>
        {children}
      </Content>
      <Footer className={styles.footer}>
        Copyright ©2020 The New York Times Company. All Rights Reserved.
      </Footer>
    </AntdLayout>
  );
}

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
