import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import linkList from './getRouterData';

import { browserHistory,  Link } from 'react-router'  //引入路由函数

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
    	console.log(linkList,'linkList');
				return (
					<Menu
						onClick={this.handleClick}
						onChange = {this.getValue}
						style={{ width: 256,height:'90vh',overflow: 'auto',minWidth:256}}
						defaultSelectedKeys={['1']}
						defaultOpenKeys = {['sub1','sub2','sub3','sub4','sub5','sub10']}
						mode="inline"
					>
						{linkList.map((child,num)=>{
							return	<SubMenu key={num+'header'} title={<span><Icon type="smile-o" /><span>{child.name}</span></span>}>
								{child.child.map((list,i)=>{
									return(<Menu.Item key={i+'child'}>
											<Link to = {list.path}>{list.name}</Link> 
										</Menu.Item>)								
								})}
							</SubMenu>
						})}
					</Menu>
				);
			}
  }