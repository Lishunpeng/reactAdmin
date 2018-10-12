
import Home from '../page/home'
import NotFound from '../page/notFound'
import Login from '../page/login'
import Tabble from '../page/tabble/Tabble'
import TabbleDetail from '../page/tabble/TabbleDetail'

/*import Tabble from '../page/tabble/Tabble'
import TabbleDetail from '../page/tabble/TabbleDetail'
import Label from '../page/label' 
import Form from '../page/form' 
import Carousel from '../page/carousel' 
import ShopHome from '../page/shop/home'
import HomeDetail from '../page/shop/home_detail'
import Echarts from '../page/echarts'
import WangEditor from '../page/wangeditor'
import Select from '../page/select'
import Redux from '../page/redux'*/
const rootData = [
	{
		path: '/Home',
		component: Home
	},
	{
		path: '/Login',
		component: Login
	},
	{
		path: '/Tabble',
		component: Tabble,
		name:'表格',
		child:{
				path: '/Tabble/:id',
				component: TabbleDetail,
				name:'详情'
			}
		
	}
	/*{
		path: '/Tabble',
		component: Tabble
	},
	{
		path: '/Tabble/:id',
		component: TabbleDetail,
	},
	{
		path: '/Label',
		component: Label,
	},
	{
		path: '/Form',
		component: Form,
	},
	{
		path: '/Carousel',
		component: Carousel,
	},
	{
		path: '/ShopHome',
		component: ShopHome,
	},
	{
		path: '/HomeDetail',
		component: HomeDetail,
	},
	{
		path: '/Echarts',
		component: Echarts,
	},
	{
		path: '/Select',
		component: Select,
	},
	{
		path: '/WangEditor',
		component: WangEditor,
	},
	{
		path: '/Redux',
		component: Redux,
	},*/
	
]
rootData.push({path: '*',component: NotFound});
export default rootData;
