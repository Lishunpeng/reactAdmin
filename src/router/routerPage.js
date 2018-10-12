import React from 'react'  
import { Router, Route,IndexRoute } from 'react-router'  
import { Switch } from 'react-router-dom'
// 引入所有基础配置
import '../config/globalConfig'
  
import Demo1 from '../page' 
import rootData from './routerData' 
import Home from '../page/home'


export default class RouteMap extends React.Component {  
		constructor(props){
			super(props);
			this.state = {};
		}
    updateHandle () {  
        console.log(this.props.history,'每次router变化之后都会触发')  
    }  
    componentWillMount(){
    }
    render () {  
    		return (  
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={Demo1}>
                	<IndexRoute component={Home}/>
                	<Switch>
			              {rootData.map((item,i)=>{
			              	return(
			              		<div key={i}>
				              		<Route key={i} path={item.path} component={item.component}></Route>
				              		{item.child?<Route key={i+'child'} path={item.child.path} component={item.child.component}></Route>:''}
			              		</div>
			              	)
										})}
		              </Switch>
                </Route>
            </Router>  
        )  
    }  
}  
