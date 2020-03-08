import { Card } from 'antd';
import { string } from 'prop-types';
import React from 'react';

import ArticleDescription from './ArticleDescription/ArticleDescription';
import ArticleTitle from './ArticleTitle/ArticleTitle';

const { Meta } = Card;

export default function ArticleCard({
  title,
  abstract,
  thumbnailUrl,
  publishedDate,
  section,
}) {
  return (
    <Card
      hoverable
      style={{ width: '100%' }}
      cover={thumbnailUrl && <img alt="thumbnail" src={thumbnailUrl} />}
    >
      <Meta
        title={<ArticleTitle>{title}</ArticleTitle>}
        description={
          <ArticleDescription
            abstract={abstract}
            publishedDate={publishedDate}
            section={section}
          />
        }
      />
    </Card>
  );
}

ArticleCard.propTypes = {
  title: string.isRequired,
  abstract: string.isRequired,
  thumbnailUrl: string.isRequired,
  publishedDate: string.isRequired,
  section: string.isRequired,
};
