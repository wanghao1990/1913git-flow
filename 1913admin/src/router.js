import React,{Component} from 'react'
import CustomNav from './component/customNav'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import ComponentImport from './utils/componentImport.js'
const Login = ComponentImport(()=>import('./component/login'))
// import Login from './component/login'
const Admin = ComponentImport(()=>import('./component/admin'))
const User = ComponentImport(()=>import('./component/user'))
const Home = ComponentImport(()=>import('./component/home'))

class RootRouter extends Component{
    render(){
        return(
             <HashRouter>
                 {/* 导航 */}
                 
                 {/* 路由渲染 */}
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={()=>{
                        //嵌套子路由的时候不能加精准匹配exact 
                        return(
                            <Admin>
                                <CustomNav>
                                </CustomNav>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/user' component={User}></Route>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
        
    }
}
export default RootRouter