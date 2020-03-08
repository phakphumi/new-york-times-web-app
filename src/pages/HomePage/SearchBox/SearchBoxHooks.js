import { useContentLoading } from '_contexts';
import { useArticles } from '_contexts/articlesHooks';
import { getArticlesByTerm } from '_services/searchArticleService';
import { transformArticlesFromSearchAPI } from '_utils/articlesUtils';
import { useDebounce } from '_utils/useDebounce';
import { get } from 'lodash';
import {
  useEffect,
  useState,
} from 'react';

export function useSearchBox() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 1500);
  const {
    setContentIsLoading,
    setContentIsNotLoading,
  } = useContentLoading();
  const {
    search: { currentPage },
    updateArticles,
    appendArticles,
    setDebouncedSearchTerm,
  } = useArticles();

  const searchArticles = async (debouncedSearchTerm, sortBy) => {
    try {
      setContentIsLoading();
      const response = await getArticlesByTerm(debouncedSearchTerm, sortBy);
      updateArticles(
        transformArticlesFromSearchAPI(get(response, ['data', 'response', 'docs']))
      );
    } catch {
      history.push('/error');
    } finally {
      setContentIsNotLoading();
    }
  };

  const showMoreArticles = async (debouncedSearchTerm, sortBy, currentPage) => {
    try {
      setContentIsLoading();
      const response = await getArticlesByTerm(debouncedSearchTerm, sortBy, currentPage);
      appendArticles(
        transformArticlesFromSearchAPI(get(response, ['data', 'response', 'docs']))
      );
    } catch {
      history.push('/error');
    } finally {
      setContentIsNotLoading();
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortBy = (sort) => {
    setSortBy(sort);
    if (debouncedSearchTerm) {
      searchArticles(debouncedSearchTerm, sort);
    }
  };

  useEffect(() => {
    setDebouncedSearchTerm(debouncedSearchTerm);
    if (debouncedSearchTerm) {
      searchArticles(debouncedSearchTerm, sortBy);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      showMoreArticles(debouncedSearchTerm, sortBy, currentPage);
    }
  }, [currentPage]);

  return {
    handleSearchTermChange,
    handleSortBy,
  };
}
