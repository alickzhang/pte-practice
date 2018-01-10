import React, { Component } from 'react';
import { Row, Col, BackTop, List, Card } from 'antd';

import Layout from '../../components/layout/Layout';
import data from '../../data/rl.json';

export default class RL extends Component {

  render() {
    return (
      <Layout>
        <Row type="flex" justify="center">
          <Col span={22} style={{ textAlign: 'center' }}>
            <h1>Retell Lecture (RL)</h1>
          </Col>
          <Col span={22}>
            <List
              grid={{ column: 1 }}
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Card title={item.title}>{item.text}</Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <BackTop />
      </Layout>
    );
  }
}
