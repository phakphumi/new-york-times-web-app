import { useContentLoading } from '_/contexts';
import { IMAGE_URL_PREFIX } from '_constants';
import { getArticleById } from '_services/searchArticle';
import { get } from 'lodash';
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
  return ({
    title: get(article, ['headline', 'main']),
    abstract: get(article, 'abstract'),
    leadParagraph: get(article, 'lead_paragraph'),
    articleImageUrl: `${IMAGE_URL_PREFIX}${get(article, ['multimedia', 0, 'url'])}`,
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
