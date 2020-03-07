import {
  Col,
  Row,
} from 'antd';
import { string } from 'prop-types';
import React from 'react';

// import styles from './ArticleTitle.module.scss';

function ArticleDescription({
  abstract,
  publishedDate,
}) {
  return (
    <div >
      <Row>
        <Col>
          {abstract}
        </Col>
      </Row>
      <Row>
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
};

export default ArticleDescription;
