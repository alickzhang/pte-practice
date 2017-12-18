import React, { Component, Fragment } from 'react';
import { Row, Col, Table, Anchor, BackTop, Switch } from 'antd';
import _ from 'lodash';

import Layout from '../../components/layout/Layout';
import vocabularyData from '../../data/vocabulary.json';

const { Link } = Anchor;

export default class Vocabulary extends Component {

  state = { showLearning: false, totalCount: 0, learningCount: 0, vocabulary: [], learningVocabulary: [] }

  componentWillMount() {
    const sortedWordList = _.sortBy(vocabularyData, word => word.word.toLowerCase());
    const filteredWordList = _.filter(sortedWordList, word => !word.master);
    const totalCount = vocabularyData.length;
    const learningCount = filteredWordList.length;
    const groupedWordList = _.groupBy(sortedWordList, word => word.word.toLowerCase().substr(0, 1));
    const groupedFilteredWordList = _.groupBy(filteredWordList, word => word.word.toLowerCase().substr(0, 1));
    const vocabulary = Object.entries(groupedWordList);
    const learningVocabulary = Object.entries(groupedFilteredWordList);
    this.setState({ totalCount, learningCount, vocabulary, learningVocabulary });
  }

  onSwitch = (checked) => {
    this.setState({ showLearning: checked });
  }

  render() {
    const { showLearning, totalCount, learningCount, vocabulary, learningVocabulary } = this.state;
    const columns = [
      { title: 'Word', dataIndex: 'word', key: 'word', width: '30%' },
      { title: 'Meaning', dataIndex: 'meaning', key: 'meaning' }
    ];
    const vocabularyList = showLearning ? learningVocabulary : vocabulary;
    return (
      <Layout>
        <Row type="flex" justify="space-around">
          <Col span={22} style={{ textAlign: 'center' }}>
            <h1>Vocabulary</h1>
          </Col>
          <Col span={14} style={{ margin: '20px 0', fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
            <span>{`Total: ${totalCount} / Master: ${totalCount - learningCount} / Learning: ${learningCount}`}</span>
            <span>
              <span style={{ marginRight: '10px' }}>Show learning words only</span>
              <Switch onChange={this.onSwitch} />
            </span>
          </Col>
          <Col span={18}>
            {
              vocabularyList.map(([key, value]) =>
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
            <Anchor>{ vocabulary.map(entry => <Link key={entry[0]} href={`#${entry[0]}`} title={entry[0].toUpperCase()} />) }</Anchor>
          </Col>
        </Row>
        <BackTop />
      </Layout>
    );
  }
}
