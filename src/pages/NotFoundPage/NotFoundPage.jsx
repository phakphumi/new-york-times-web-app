import { FrownOutlined } from '@ant-design/icons';
import {
  Col,
  Row,
} from 'antd';
import React from 'react';

import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <Row gutter={[0, 16]}>
        <Col>
          <FrownOutlined className={styles.icon} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>404</h1>
        </Col>
      </Row>
      <Row gutter={[0, 16]}>
        <Col>
          <h3>Page Not Found</h3>
        </Col>
      </Row>
    </div>
  );
}

export default NotFoundPage;
