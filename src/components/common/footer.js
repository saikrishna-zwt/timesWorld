import React from 'react'
import {  Layout } from 'antd';
  const {  Footer } = Layout;

const FooterContainer = () => {
  return (
    <div style={{ backgroundColor:"#FBFBFB", textAlign: 'center', position:"fixed",left:"0",bottom:"0",width:"100%", }}>
       <Footer >Ant Design ©2023 Created by Ant UED</Footer>
    </div>
  )
}

export default FooterContainer
