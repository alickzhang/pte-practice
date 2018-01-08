import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Layout as AntLayout, Menu } from 'antd';

const { Header, Content, Footer } = AntLayout;
const { SubMenu } = Menu;

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
        <SubMenu title="Speaking">
          <Menu.Item key="/rs"><Link to="/rs">Repeat Sentence</Link></Menu.Item>
          <Menu.Item key="/rl"><Link to="/rl">Retell Lecture</Link></Menu.Item>
        </SubMenu>
        <SubMenu title="Writing">
          <Menu.Item key="/swt"><Link to="/swt">SWT</Link></Menu.Item>
        </SubMenu>
        <SubMenu title="Reading">
          <Menu.Item key="/rp"><Link to="/rp">Re-order Paragraphs</Link></Menu.Item>
        </SubMenu>
        <SubMenu title="Listening">
          <Menu.Item key="/sst"><Link to="/sst">SST</Link></Menu.Item>
          <Menu.Item key="/wfd"><Link to="/wfd">WFD</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="/vocabulary"><Link to="/vocabulary">Vocabulary</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', backgroundColor: '#fff' }}>
      {props.children}
    </Content>
    <Footer style={{ backgroundColor: '#d9d9d9', textAlign: 'center' }}>
      PTE Practice &copy; 2017 Alick Zhang. All Rights Reserved.
    </Footer>
  </AntLayout>
)

export default withRouter(Layout);
