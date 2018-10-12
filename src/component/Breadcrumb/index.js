import React from 'react';
import { Breadcrumb  } from 'antd';
export default class Breadcrumb extends React.Component {
    render () {
    	const route = this.props;
        return (
           <Breadcrumb>
			    <Breadcrumb.Item><a href="">首页</a></Breadcrumb.Item>
			    <Breadcrumb.Item>{route.name}</Breadcrumb.Item>
			</Breadcrumb>
        )
    }
}