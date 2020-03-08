import { IMAGE_URL_PREFIX } from '_constants';
import { useContentLoading } from '_contexts';
import { getArticleById } from '_services/searchArticle';
import {
  chain,
  get,
} from 'lodash';
import moment from 'moment';
import {
  useEffect,
  useState,
} from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom';

function transformArticle(article) {
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

export function useArticlePage() {
  const { articleId } = useParams();
  const history = useHistory();
  const [article, setArticle] = useState({});
  const {
    setContentIsLoading,
    setContentIsNotLoading,
  }=useContentLoading();

  const handleGoBackBtnClick = () => {
    history.goBack();
  };

  useEffect(() => {
    (async () => {
      try {
        setContentIsLoading();
        const response = await getArticleById(articleId);
        setArticle(
          transformArticle(get(response, ['data', 'response', 'docs', 0]))
        );
      } catch {
        history.push('/error');
      } finally {
        setContentIsNotLoading();
      }
    })();
  }, []);

  return {
    article,

    handleGoBackBtnClick,
  };
}
