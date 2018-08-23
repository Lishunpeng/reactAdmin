import React from 'react'  
import { Router, Route, IndexRoute, browserHistor, Link } from 'react-router'  

// 引入所有基础配置
import '../config/globalConfig'
  
import Demo1 from '../page' 
import rootData from './routerData' 
import NotFound from '../page/notFound'

export default class RouteMap extends React.Component {  
		constructor(props){
			super(props);
			this.state = {arr:[]};
		}
    updateHandle () {  
        console.log('每次router变化之后都会触发')  
    }  
    componentWillMount(){
    	let myArr = [];
    	for (let i in rootData) {
    		myArr = [...myArr,...rootData[i].child];
    	}
    	this.setState({arr:myArr});
    }
    render () {  
    		const list = this.state.arr;
        return (  
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={Demo1}>
		              {list.map((item,i)=>{
			            return(<Route key={i} path={item.path} component={item.component}>
				              	if(item.child){
					              	{item.child.map((child,i)=>{
														return	<Route path={child.path} component={child.component} key={i}/>
					             		})}			              		
				              	}
			              </Route>)
									})}
		              <Route path={'*'} component={NotFound}/>
                </Route>
            </Router>  
        )  
    }  
}  
