import Tabble from '../page/tabble' 
import Label from '../page/label' 
import Form from '../page/form' 
import Carousel from '../page/carousel' 
import ShopHome from '../page/shop/home'
import HomeDetail from '../page/shop/home_detail'
import Echarts from '../page/echarts'
import WangEditor from '../page/wangeditor'
import Select from '../page/select'
import Redux from '../page/redux'
import TabbleDetail from '../page/tabble/TabbleDetail'

const rootData = [
	{
		name:'第一层',
		key:1,
		child:[
			{
				name:'这是Tabble',
				path: '/Tabble',
				component: Tabble,
				child:{
					path:'/Tabble/:id',
					component: TabbleDetail,
				}
			},
			{
				name:'这是Label',
				path: '/Label',
				component: Label,
			},
			{
				name:'这是Form',
				path: '/Form',
				component: Form,
			}
		]
	},
	{
		name:'第二层',
		key:2,
		child:[
			{
				name:'这是Carousel',
				path: '/Carousel',
				component: Carousel,
			},
			{
				name:'这是ShopHome',
				path: '/ShopHome',
				component: ShopHome,
			},
			{
				name:'这是HomeDetail',
				path: '/HomeDetail',
				component: HomeDetail,
			},
			{
				name:'这是Echarts',
				path: '/Echarts',
				component: Echarts,
			}
		]
	},
	{
		name:'第三层',
		key:3,
		child:[
			{
				name:'这是Select',
				path: '/Select',
				component: Select,
			},
			{
				name:'这是WangEditor',
				path: '/WangEditor',
				component: WangEditor,
			},
			{
				name:'这是Redux',
				path: '/Redux',
				component: Redux,
			}
		]
	}
	
]

export default rootData;

/*

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
						linkList.map((child,num)=>{
							<SubMenu key={num+'header'} title={<span><Icon type="smile-o" /><span>讽德诵功</span></span>}>
								child.child.map((list,i)=>{
									return(<Menu.Item key={i+'child'}>
											<Link to = {list.path}>表格</Link> 
										</Menu.Item>)								
								})
							</SubMenu>
						})
					</Menu>
				);
			}
  }
*/