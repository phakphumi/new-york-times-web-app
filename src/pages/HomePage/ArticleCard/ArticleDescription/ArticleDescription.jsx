import {
  Col,
  Row,
} from 'antd';
import { string } from 'prop-types';
import React from 'react';

import styles from './ArticleDescription.module.scss';

function ArticleDescription({
  abstract,
  publishedDate,
  section,
}) {
  return (
    <div >
      <Row gutter={[0, 8]}>
        <Col>
          <div className={styles.abstract}>
            {abstract}
          </div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col>
          {section}
        </Col>
        <Col>
          {publishedDate}
        </Col>
      </Row>
    </div>
  );
}

ArticleDescription.propTypes = {
  abstract: string.isRequired,
  publishedDate: string.isRequired,
  section: string.isRequired,
};

export default ArticleDescription;
