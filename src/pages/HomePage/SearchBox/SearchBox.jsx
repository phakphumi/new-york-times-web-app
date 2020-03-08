import { SearchOutlined } from '@ant-design/icons';
import {
  Input,
  Select,
} from 'antd';
import React from 'react';

import { useSearchBox } from './SearchBoxHooks';

function SearchBox() {
  const {
    handleSearchTermChange,
    handleSortBy,
  } = useSearchBox();

  return (
    <Input
      placeholder="Search your article"
      prefix={<SearchOutlined />}
      onChange={handleSearchTermChange}
      addonAfter={
        <Select
          placeholder="Sort by"
          style={{ width: '100px' }}
          onChange={handleSortBy}
        >
          <Select.Option value="newest">Newest</Select.Option>
          <Select.Option value="oldest">Oldest</Select.Option>
        </Select>
      }
    />
  );
}

export default SearchBox;
