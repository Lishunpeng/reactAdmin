import React from 'react';
import { Table } from 'antd';

export default class TabbleDetail extends React.Component {
	constructor(props){
		super(props);
	}
    render () {
    	const {columns,dataSource} = this.props;
        return (
            <div>   
                <Table columns={columns} dataSource={dataSource} scroll={{ x: 1500,y:500}} />
            </div>
        )
    }
}
