import { ARTICLE_URI_PREFIX, IMAGE_URL_PREFIX } from '_constants';
import { useContentLoading } from '_contexts';
import { getArticlesByTerm } from '_services/searchArticle';
import { useDebounce } from '_utils/useDebounce';
import {
  chain,
  get,
  map,
  replace,
  startCase,
} from 'lodash';
import moment from 'moment';
import {
  useEffect,
  useState,
} from 'react';

function transformArticles(results) {
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

export function useSearchBox({
  setArticles,
  setHomePageSearchTerm,
}) {
  const [searchTerm, setSearchTerm] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 1500);
  const {
    setContentIsLoading,
    setContentIsNotLoading,
  } = useContentLoading();

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getArticles = async (term) => {
    try {
      setContentIsLoading();
      const response = await getArticlesByTerm(term);
      setArticles(
        transformArticles(get(response, ['data', 'response', 'docs']))
      );
    } catch {
      history.push('/error');
    } finally {
      setContentIsNotLoading();
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      getArticles(debouncedSearchTerm);
    }
    setHomePageSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return {
    handleSearchTermChange,
  };
}
