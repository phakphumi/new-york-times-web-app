import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function SearchBox() {
  return (
    <>
      <Input
        placeholder="Search your article"
        prefix={<SearchOutlined />}
      />
    </>
  );
}
