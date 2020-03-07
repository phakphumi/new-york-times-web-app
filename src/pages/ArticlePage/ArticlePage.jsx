import {
  Col,
  PageHeader,
  Row,
} from 'antd';
import React from 'react';

import styles from './ArticlePage.module.scss';
import { useArticlePage } from './ArticlePageHooks';

function ArticlePage() {
  const {
    article: {
      title,
      abstract,
      articleImageUrl,
      leadParagraph,
      nytimesArticleUrl,
      publishedDate,
      author,
    },
    handleGoBackBtnClick,
  } = useArticlePage();

  return (
    <div>
      <PageHeader
        onBack={handleGoBackBtnClick}
        title={title}
      />
      <div className={styles.contentContainer}>
        <Row gutter={[0, 16]}>
          <Col>
            {abstract}
          </Col>
        </Row>
        {
          articleImageUrl && (
            <Row gutter={[0, 16]} justify="center">
              <Col>
                <img
                  alt="article-img"
                  src={articleImageUrl}
                />
              </Col>
            </Row>
          )
        }
        {
          leadParagraph && (
            <Row gutter={[0, 16]}>
              <Col>
                <span>
                  {leadParagraph}
                </span>
                <span>
                  <a
                    href={nytimesArticleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' Read more...'}
                  </a>
                </span>
              </Col>
            </Row>
          )
        }
        <Row>
          <Col>
            <b>{publishedDate}</b>
          </Col>
        </Row>
        <Row>
          <Col>
            <b>{author}</b>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ArticlePage;
