import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { func } from 'prop-types';
import React from 'react';

import { useSearchBox } from './SearchBoxHooks';

function SearchBox({
  setArticles,
  setHomePageSearchTerm,
}) {
  const { handleSearchTermChange } = useSearchBox({
    setArticles,
    setHomePageSearchTerm,
  });

  return (
    <Input
      placeholder="Search your article"
      prefix={<SearchOutlined />}
      onChange={handleSearchTermChange}
    />
  );
}

SearchBox.propTypes = {
  setArticles: func.isRequired,
  setHomePageSearchTerm: func.isRequired,
};

SearchBox.defaultProps = {
  homePageSearchTerm: null,
};

export default SearchBox;
