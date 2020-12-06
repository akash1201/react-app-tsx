import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout} from 'antd'
import { Typography } from 'antd';
import { Form, Input,  Checkbox } from 'antd';

import {  Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {
  
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,

} from '@ant-design/icons';

const { SubMenu } = Menu;

const { Title } = Typography;

const {Header, Sider, Content, Footer } = Layout;


function App() {
     
 
  return (
    
    <div className='App'>
               
               <Layout>
              
                   <Header>

                   <Title  style={{color:'white', float:'left'}} level={3}>React App</Title>
                   <Avatar   style={{color:'white', float:'right'}} icon={<UserOutlined />} />
                   </Header>
               </Layout>  
                      
                  <Layout>
                         <Sider style={{backgroundColor:'white'}}>
                            
                         <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          
        >

                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                                       Option 1
                     </Menu.Item>

                     <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation Three">
                            <Menu.Item key="5">Sub 1</Menu.Item>
                            <Menu.Item key="6">Sub 2</Menu.Item>
                            <Menu.Item key="7">Sub 3</Menu.Item>
                            <Menu.Item key="8">Sub 3</Menu.Item>
                     </SubMenu>

                     <SubMenu key="sub2" icon={<MailOutlined />} title="Navigation Two">
                            <Menu.Item key="5">Sub 1</Menu.Item>
                            <Menu.Item key="6">Sub 2</Menu.Item>
                            <Menu.Item key="7">Sub 3</Menu.Item>
                            <Menu.Item key="8">Sub 3</Menu.Item>
                     </SubMenu>

                     <SubMenu key="sub3" icon={<MailOutlined />} title="Navigation Three">
                            <Menu.Item key="5">Sub 1</Menu.Item>
                            <Menu.Item key="6">Sub 2</Menu.Item>
                            <Menu.Item key="7">Sub 3</Menu.Item>
                            <Menu.Item key="8">Sub 3</Menu.Item>
                     </SubMenu>
                   

          </Menu>

                         </Sider>
                         <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Form
      // {...layout}
      name="basic"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item  name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

        </Content>
                  </Layout>

                  <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by AKash Chhetri</Footer>
             
              
    </div>

  );
}

export default App;
