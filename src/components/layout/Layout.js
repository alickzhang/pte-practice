import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Layout as AntLayout, Menu } from 'antd';

const { Header, Content, Footer } = AntLayout;

const Layout = (props =>
  <AntLayout>
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        selectedKeys={[`/${props.location.pathname.split('/')[1]}`]}
      >
        <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="/reading"><Link to="/reading">Reading</Link></Menu.Item>
        <Menu.Item key="/sst"><Link to="/sst">SST</Link></Menu.Item>
      </Menu>
    </Header>
    <Content>
      {props.children}
    </Content>
    <Footer>
      PTE Practice &copy; 2017 Alick Zhang. All Rights Reserved.
    </Footer>
  </AntLayout>
)

export default withRouter(Layout);
