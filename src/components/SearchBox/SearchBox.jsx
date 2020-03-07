import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';

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
