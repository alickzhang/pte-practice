import React, { Component } from 'react';
import { Row, Col, Table, BackTop } from 'antd';

import Layout from '../../components/layout/Layout';
import data from '../../data/sst.json';

export default class SST extends Component {

  state = { data: [] }

  componentWillMount() {
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const columns = [
      { key: 'id', dataIndex: 'id', title: 'ID', width: '5%' },
      { key: 'title', dataIndex: 'title', title: 'Title', width: '15%' },
      { key: 'keywords', dataIndex: 'keywords', title: 'Keywords', width: '25%' },
      { key: 'answer', dataIndex: 'answer', title: 'Answer', width: '45%' },
      { key: 'word count', title: 'Word count', width: '10%', render: (text, record) => <span>{record.answer.trim().split(/\s+/).length}</span> },
    ];
    return (
      <Layout>
        <Row type="flex" justify="center">
          <Col span={22} style={{ textAlign: 'center' }}>
            <h1>Summarize Spoken Text (SST)</h1>
          </Col>
          <Col span={22}>
            <Table
              columns={columns}
              dataSource={data}
              rowKey={record => record.id}
              pagination={false}
              style={{ marginBottom: '40px', clear: 'both' }}
            />
          </Col>
        </Row>
        <BackTop />
      </Layout>
    );
  }
}
