import { Card, Space } from 'antd';
import React from 'react';

export default () => (
  <Space direction="vertical" size={16}>
    <Card title="我是App2的组件" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);;