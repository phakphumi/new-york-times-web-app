import { CloseCircleOutlined } from '@ant-design/icons';
import {
  Col,
  Row,
} from 'antd';
import React from 'react';

import styles from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <div className={styles.container}>
      <Row gutter={[0, 16]}>
        <Col>
          <CloseCircleOutlined className={styles.icon} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Something went wrong</h1>
        </Col>
      </Row>
      <Row gutter={[0, 16]}>
        <Col>
          <h3>Please Try again later</h3>
        </Col>
      </Row>
    </div>
  );
}

export default ErrorPage;
