import {
  Col,
  Row,
} from 'antd';
import {
  get,
  map,
} from 'lodash';
import React from 'react';

import ArticleCard from './ArticleCard/ArticleCard';
import { useHomePage } from './HomePageHooks';


export default function HomePage () {
  const { articles } = useHomePage();

  return (
    <div>
      <Row gutter={[16, 16]}>
        {
          map(articles, (article, index) => (
            <Col md={8} key={index}>
              <ArticleCard
                title={get(article, 'title')}
                abstract={get(article, 'abstract')}
                thumbnailUrl={get(article, 'thumbnailUrl')}
                publishedDate={get(article, 'publishedDate')}
                section={get(article, 'section')}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  );
}
