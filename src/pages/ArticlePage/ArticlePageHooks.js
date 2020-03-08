import { useContentLoading } from '_contexts';
import { getArticleById } from '_services/searchArticleService';
import { transformArticleFromSearchAPI } from '_utils/articlesUtil';
import { get } from 'lodash';
import {
  useEffect,
  useState,
} from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom';

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
          transformArticleFromSearchAPI(get(response, ['data', 'response', 'docs', 0]))
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
