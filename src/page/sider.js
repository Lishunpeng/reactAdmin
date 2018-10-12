import React from 'react';

import {  Link } from 'react-router'  //引入路由函数

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;

export default class Sider extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			key: 1
		}
	}
    handleClick = (e) => {
		console.log(e)
		this.props.getValue(e.key,e.item.props.children); 
	}
    render () {
				return (
					<Menu
						onClick={this.handleClick}
						onChange = {this.getValue}
						style={{ width: 256,height:'90vh',overflow: 'auto',minWidth:256}}
						defaultSelectedKeys={['indexChild']}
						defaultOpenKeys = {['index']}
						mode="inline"
					>
						<SubMenu key='index' title={<span><Icon type="smile-o" /><span>设置</span></span>}>
							<Menu.Item key='indexChild'>
								<Link to = '/Home'>菜单</Link> 
							</Menu.Item>
						</SubMenu>
						{/*linkList.map((child,num)=>{
							return	<SubMenu key={num+'header'} title={<span><Icon type="smile-o" /><span>{child.name}</span></span>}>
								{child.child.map((list,i)=>{
									return(<Menu.Item key={i+'child'}>
											<Link to = {list.path}>{list.name}</Link> 
										</Menu.Item>)								
								})}
							</SubMenu>
						})*/}
					</Menu>
				);
			}
  }