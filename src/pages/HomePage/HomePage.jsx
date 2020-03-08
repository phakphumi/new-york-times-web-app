import SearchBox from '_components/SearchBox/SearchBox';
import {
  Col,
  Row,
} from 'antd';
import {
  get,
  map,
} from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

import ArticleCard from './ArticleCard/ArticleCard';
import { useHomePage } from './HomePageHooks';


export default function HomePage () {
  const { articles } = useHomePage();

  return (
    <div>
      <Row>
        <SearchBox />
      </Row>
      <Row gutter={[16, 16]}>
        {
          map(articles, (article, index) => (
            <Col md={8} key={index}>
              <Link to={`article/${get(article, 'articleId')}`}>
                <ArticleCard
                  title={get(article, 'title')}
                  abstract={get(article, 'abstract')}
                  thumbnailUrl={get(article, 'thumbnailUrl')}
                  publishedDate={get(article, 'publishedDate')}
                  section={get(article, 'section')}
                />
              </Link>
            </Col>
          ))
        }
      </Row>
    </div>
  );
}
