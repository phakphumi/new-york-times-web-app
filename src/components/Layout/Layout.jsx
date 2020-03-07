import { LoadingOutlined } from '@ant-design/icons';
import {
  Col,
  Layout as AntdLayout,
  Row,
  Spin,
} from 'antd';
import { node } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { useContentLoading } from '../../contexts';
import styles from './Layout.module.scss';


const { Header, Content, Footer } = AntdLayout;

function Layout({ children }) {
  const { isContentLoading } = useContentLoading();

  return (
    <AntdLayout className="layout">
      <Header className={styles.header}>
        <Row justify="center" align="middle">
          <Col>
            <Link to="/">
              <div className={styles.logo}>
              7 Peaks News
              </div>
            </Link>
          </Col>
        </Row>
      </Header>
      <Content className={styles.content}>
        <Spin
          className={styles.spinner}
          spinning={isContentLoading}
          tip="Loading..."
          indicator={<LoadingOutlined />}
        >
          {children}
        </Spin>
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
