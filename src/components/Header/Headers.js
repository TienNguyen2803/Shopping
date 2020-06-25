import React, { Component } from 'react';
import {   Menu  } from 'antd';
class Headers extends Component {
    render() {
        return (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Contact</Menu.Item>
            </Menu>
        );
    }
}

export default Headers;