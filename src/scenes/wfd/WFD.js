import React, { Component, Fragment } from 'react';
import { Row, Col, Table, Input, Switch, BackTop, Button, Icon } from 'antd';

import Layout from '../../components/layout/Layout';
import wfd from '../../data/wfd.json';

const { TextArea } = Input;

class TableItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      data: props.data
    };
  }

  onSubmit = () => {
    let { data } = this.state;
    data.forEach(item => {
      const index = item.id - 1;
      if (data[index].input === data[index].text) {
        data[index].correct = true;
      } else {
        data[index].correct = false;
      }
    });
    this.setState({ data });
  }

  onCheck = (record) => {
    const { id } = record;
    let { data } = this.state;
    const index = id - 1;
    if (data[index].input === data[index].text) {
      data[index].correct = true;
    } else {
      data[index].correct = false;
    }
    this.setState({ data });
  }

  onBlur = (e, record) => {
    const { value } = e.target;
    const { id } = record;
    let { data } = this.state;
    data[id - 1].input = value;
    this.setState({ data });
  }

  render() {
    const { test } = this.props;
    const { title, data } = this.state;
    const columns = [
      { key: 'id', dataIndex: 'id', title: 'ID', width: '5%' },
      { key: 'text', title: 'Text', width: '30%', render: (text, record) => (
          test === false && <div>{record.text}</div>
        )
      },
      { key: 'input', title: 'Answer', width: '55%', render: (text, record) => (
          <TextArea onBlur={(e) => this.onBlur(e, record)} spellCheck={false} />
        )
      },
      { key: 'correct', title: 'Check', width: '5%', render: (text, record) => (
          <div>{ record.correct ? <Icon type="like" style={{ color: 'green', fontSize: '18px' }} /> : (record.correct === false && <Icon type="dislike" style={{ color: 'red', fontSize: '18px' }} />) }</div>
        )
      },
      { key: 'check', width: '5%', render: (text, record) => (
          <Button onClick={() => this.onCheck(record)}>Check</Button>
        )
      }
    ];
    return (
      <Fragment key={title}>
        <h2 style={{ float: 'left', marginBottom: '20px' }}>{title}</h2>
        <Button type="primary" size="large" onClick={this.onSubmit} style={{ float: 'right' }}>Submit</Button>
        <Table
          columns={columns}
          dataSource={data}
          rowKey={record => record.id}
          pagination={false}
          style={{ marginBottom: '40px', clear: 'both' }}
        />
      </Fragment>
    );
  }
}

export default class WFD extends Component {

  state = { data: [], test: false }

  componentWillMount() {
    const data = wfd;
    this.setState({ data });
  }

  onSwitch = (checked) => {
    this.setState({ test: checked });
  }

  render() {
    const { data, test } = this.state;
    return (
      <Layout>
        <Row type="flex" justify="center">
          <Col span={22} style={{ textAlign: 'center' }}>
            <h1>Write From Dictation (WFD)</h1>
          </Col>
          <Col span={22} style={{ margin: '20px' }}>
            <span style={{ fontWeight: 700, float: 'left', marginRight: '10px' }} >开启测试模式</span>
            <Switch onChange={this.onSwitch} />
            <span style={{ fontWeight: 700, float: 'right' }}>
              听力材料请访问：
              <a href="http://www.ximalaya.com/81407276/album/8201165" target="_blank" rel="noopener noreferrer">PTE黑科技最新WFD</a>
            </span>
          </Col>
          <Col span={22}>
            {
              Object.entries(data).map(([key, value]) =>
                <TableItem key={key} title={key} data={value} test={test} />
              )
            }
          </Col>
        </Row>
        <BackTop />
      </Layout>
    );
  }
}
