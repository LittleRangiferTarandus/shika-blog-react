
import './App.css';
import { Layout } from 'antd';
import BlogHeader from './components/header/BlogHeader';
import React from 'react'
import BlogSider from './components/sider/BlogSider';
import BlogCentent from './components/content/BlogCentent';

const { Header, Footer,  Content ,Sider} = Layout;
function App() {
  return (
    <>
      <Layout className='app-layout'>
        <Sider className='app-sider'>
          <BlogSider></BlogSider>
        </Sider>
        <Layout className='app-layout2'>
          <Header className='app-header' ><BlogHeader></BlogHeader></Header>
          <Content className="app-content"><BlogCentent></BlogCentent></Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
      
    </>
  );
}

export default App;
