import {
  ARTICLE_URI_PREFIX,
  IMAGE_URL_PREFIX,
} from '_constants';
import {
  chain,
  get,
  map,
  replace,
  startCase,
} from 'lodash';
import moment from 'moment';

export function transformArticlesFromTopStoriesAPI(results) {
  return map(results, (result) => ({
    title: get(result, 'title'),
    abstract: get(result, 'abstract'),
    publishedDate: moment(get(result, 'published_date')).fromNow(),
    thumbnailUrl: get(result, ['multimedia', 0, 'url']),
    section: get(result, 'section') === 'us' ? 'US' : startCase(get(result, 'section')),
    articleId: replace(get(result, 'uri'), ARTICLE_URI_PREFIX, ''),
  }));
}

export function transformArticleFromSearchAPI(article) {
  const articleImagePath = chain(article).get('multimedia').find({ subtype: 'xlarge' }).get('url').value();

  return ({
    title: get(article, ['headline', 'main']),
    abstract: get(article, 'abstract'),
    leadParagraph: get(article, 'lead_paragraph'),
    articleImageUrl: articleImagePath && `${IMAGE_URL_PREFIX}${articleImagePath}`,
    author: get(article, ['byline', 'original']) || get(article, ['source']),
    publishedDate: moment(get(article, 'pub_date')).format('MMM DD, YYYY'),
    nytimesArticleUrl: get(article, 'web_url'),
  });
}

export function transformArticlesFromSearchAPI(results) {
  return map(results, (result) => {
    const thumbnailPath = chain(result).get('multimedia').find({ subtype: 'xlarge' }).get('url').value();
    return {
      title: get(result, ['headline', 'main']),
      abstract: get(result, 'abstract'),
      publishedDate: moment(get(result, 'pub_date')).fromNow(),
      thumbnailUrl: thumbnailPath && `${IMAGE_URL_PREFIX}${thumbnailPath}`,
      section: get(result, 'section_name') === 'us' ? 'US' : startCase(get(result, 'section_name')),
      articleId: replace(get(result, 'uri'), ARTICLE_URI_PREFIX, ''),
    };
  });
}
