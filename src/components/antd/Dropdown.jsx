import React from 'react';
import { Button, Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a rel="noopener noreferrer" href="#">
        企業概況與沿革
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a rel="noopener noreferrer" href="#">
        經營理念與核心價值觀
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a rel="noopener noreferrer" href="#">
        聯絡我們
      </a>
    ),
  },
];
const DropdownBottom = () => (
  <Space direction="vertical">
    <Space wrap>

      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button>關於王品</Button>
      </Dropdown>
      
    </Space>
  </Space>
);
export default DropdownBottom;