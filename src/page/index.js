import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon,Breadcrumb  } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './public.scss';  // or 'antd/dist/antd.less'

import SiderComponent from './sider'
import Tooltip from '../component/tooltip'
import MyNews from '../component/myNews'
import rootData from '../router/routerData' 
const { Header, Footer, Sider, Content  } = Layout;

// 
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.cnblogs.com/hai-cheng/">我的博客</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Hi-Sen">我的 GitHub</a>
        </Menu.Item>
        <Menu.Item>
            <MyNews/>
        </Menu.Item>
        <Menu.Item>
            <Tooltip/>
        </Menu.Item>
    </Menu>
);

export default class Demo1 extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: '1',
            valueTxt: '',
        }
    }

    getValue (val,value) {
        this.setState ({
            value: val,
            valueTxt: value
        })
    }
	changeBread = () => {
		let {pathname} = this.props.location;
		let result = {}
		pathname = pathname.split('/');
		for(let i in rootData){
			rootData[i].path = rootData[i].path.replace('/','');
			if(rootData[i].path === pathname[1]){
				result.name = rootData[i].name;
				if(pathname.length===3 && pathname[2]!=='' && rootData[i].child){
					result.childName = rootData[i].child.name;
				}
				console.log(result);
				return result;
			}
		}
    }
    render () {
    	const breadData = this.changeBread();
    	return (
            <div style={{minWidth:'1000px'}}>
                <Layout>
                    <Header style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>
                        <Row>
                            <Col span={10}>
                                React + Antd 实践 demo
                            </Col>
                            <Col span={8}><Input placeholder="请输入你想要的......" /></Col>
                            <Col span={6}>
                                <Avatar style={{backgroundColor: '#87d068',marginRight:20}} icon="user" />  
                                <Dropdown overlay={menu}>
                                    <span className="ant-dropdown-link" href="#" style={{color:'#fff',cursor:'pointer'}}>
                                        Hi-Sen <Icon type="down" />
                                    </span>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Header>
                    <Layout>
                        <Sider style={{color:'#666'}}>
                            <SiderComponent 
                                getValue={this.getValue.bind(this)}
                            />
                        </Sider>
                        <Content style={{marginLeft:'5%',height:'86vh',paddingRight:'2%',overflow:'auto',textAlign:'center'}} className="adminContent">
                        	<Breadcrumb>
							    <Breadcrumb.Item><a href="">首页</a></Breadcrumb.Item>
							    <Breadcrumb.Item>{breadData && breadData.name}</Breadcrumb.Item>
							    {breadData && breadData.childName?<Breadcrumb.Item>{breadData.childName}</Breadcrumb.Item>:''}
							</Breadcrumb>
                            {this.props.children}
                        </Content>
                    </Layout>
                    <Footer style={{backgroundColor:'#001529',position:'fixed',bottom:0,width:'100vw',minWidth:'1000px',textAlign:'center',fontWeight:'bold',color:'#fff'}}>
                        2018/05/31  - react + Ant Design - gitHub地址：
                        <a href="https://github.com/Hi-Sen/React-Antd-demo-one" target="_blank" rel="noopener noreferrer">https://github.com/Hi-Sen/React-Antd-demo-one</a>     
                    </Footer>
                </Layout>
            </div> 
        )
    }
}
