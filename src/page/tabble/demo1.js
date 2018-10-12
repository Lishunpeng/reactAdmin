import React from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import { Table, Icon, Divider } from 'antd';
//import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => text,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
      	<Link to = "/Tabble/Action">Action 一 {record.name}</Link>
        <Divider type="vertical" />
        <Link to = "/Tabble/Delete">Delete</Link> 
        <Divider type="vertical" />
        <Link to = "/Tabble/More_actions " className="ant-dropdown-link">More actions <Icon type="down" /></Link>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];
  

export default class TabbleDemo1 extends React.Component {
    
    render () {
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>   
        )
    }
}