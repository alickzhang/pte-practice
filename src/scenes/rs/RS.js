import React, { Component } from 'react';
import { Row, Col, Table, Button, Switch } from 'antd';

import Layout from '../../components/layout/Layout';

import rs from '../../data/rs.json';

export default class RS extends Component {

  state = { data: [], test: false }

  componentWillMount() {
    const data = rs;
    this.setState({ data });
  }

  onTestSwitch = (checked) => {
    this.setState({ test: checked });
  }

  onPlay = (record) => {
    const msg = new SpeechSynthesisUtterance(record.text);
    window.speechSynthesis.speak(msg);
  }

  render() {
    const { data, test } = this.state;

    const columns = [
      { key: 'id', dataIndex: 'id', title: 'ID', width: '10%' },
      { key: 'text', title: 'Text', width: '50%', render: (text, record) => (
          test === false && <div>{record.text}</div>
        )
      },
      { key: 'check', width: '10%', render: (text, record) => (
          <Button onClick={() => this.onPlay(record)}>Play</Button>
        )
      }
    ];
    return (
      <Layout>
        <Row type="flex" justify="center">
          <Col span={22} style={{ textAlign: 'center' }}>
            <h1>Repeat Sentence (RS)</h1>
          </Col>
          <Col span={22} style={{ margin: '20px', display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
            <div style={{ marginRight: '10px' }}>开启测试模式 <Switch onChange={this.onTestSwitch} /></div>
          </Col>
          <Col span={22}>
            <Table
              columns={columns}
              dataSource={data}
              rowKey={record => record.id}
              pagination={false}
            />
          </Col>
        </Row>
      </Layout>
    );
  }
}
