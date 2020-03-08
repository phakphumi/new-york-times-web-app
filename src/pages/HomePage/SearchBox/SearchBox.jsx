import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';

import { useSearchBox } from './SearchBoxHooks';

function SearchBox() {
  const { handleSearchTermChange } = useSearchBox();

  return (
    <Input
      placeholder="Search your article"
      prefix={<SearchOutlined />}
      onChange={handleSearchTermChange}
    />
  );
}

export default SearchBox;
