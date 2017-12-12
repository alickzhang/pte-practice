import React, { Component } from 'react';

import Layout from '../../components/layout/Layout';
import data from '../../data/reorder.json';

export default class Reading extends Component {

  componentWillMount() {
    console.log(data);
  }

  render() {
    return (
      <Layout></Layout>
    );
  }
}
