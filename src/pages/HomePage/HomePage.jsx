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
import SearchBox from './SearchBox/SearchBox';


export default function HomePage () {
  const {
    articles,
    currentSearchTerm,

    setArticles,
    setCurrentSearchTerm,
  } = useHomePage();

  return (
    <div>
      <Row gutter={[0, 16]}>
        <Col md={24}>
          <SearchBox
            setArticles={setArticles}
            setHomePageSearchTerm={setCurrentSearchTerm}
          />
        </Col>
      </Row>
      {
        currentSearchTerm && (
          <Row gutter={[0, 16]}>
            <Col>
              Search Results for : <b>{currentSearchTerm}</b>
            </Col>
          </Row>
        )
      }
      <Row>

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
