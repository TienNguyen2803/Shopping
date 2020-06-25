import React from 'react';
import { Layout  } from 'antd';
import './App.css';
import 'antd/dist/antd.css'; 
import Contents from './components/Content';
import Headers from './components/Header/Headers';
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
       <Headers/>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Contents/>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  
  );
}

export default App;
