import React, { Component, Fragment } from 'react';
import { Row, Col, Table, Anchor, BackTop } from 'antd';
import _ from 'lodash';

import Layout from '../../components/layout/Layout';
import words from '../../data/words.json';

const { Link } = Anchor;

export default class Word extends Component {

  state = { count: 0, wordList: [] }

  componentWillMount() {
    const count = words.length;
    const sortedWordList = _.sortBy(words, word => word.word.toLowerCase());
    const groupedWordList = _.groupBy(sortedWordList, word => word.word.toLowerCase().substr(0, 1));
    const wordList = Object.entries(groupedWordList);
    this.setState({ count, wordList });
  }

  render() {
    const { count, wordList } = this.state;
    const columns = [
      { title: 'Word', dataIndex: 'word', key: 'word', width: '30%' },
      { title: 'Meaning', dataIndex: 'meaning', key: 'meaning' }
    ];
    return (
      <Layout>
        <Row type="flex" justify="space-around">
          <Col span={14} style={{ margin: '20px 0', fontSize: '16px', textAlign: 'right' }}>
            <span>{`Total: ${count}`}</span>
          </Col>
          <Col span={18}>
            {
              wordList.map(([key, value]) =>
                <Fragment key={key}>
                  <h1 id={key}>{key.toUpperCase()}</h1>
                  <Table
                    columns={columns}
                    dataSource={value}
                    rowKey={word => word.word}
                    pagination={false}
                    style={{ marginBottom: '20px' }}
                  />
                </Fragment>
              )
            }
          </Col>
          <Col span={2}>
            <Anchor>
              {
                wordList.map(entry =>
                  <Link key={entry[0]} href={`#${entry[0]}`} title={entry[0].toUpperCase()} />
                )
              }
            </Anchor>
          </Col>
        </Row>
        <BackTop />
      </Layout>
    );
  }
}
