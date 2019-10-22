import React,{Component} from 'react'
import CustomNav from './component/customNav'

import Login from './component/login'
import Admin from './component/admin'
import User from './component/user'
import Home from './component/home'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
class RootRouter extends Component{
    render(){
        return(
             <HashRouter>
                 {/* 导航 */}
                 <CustomNav>
                     
                 </CustomNav>
                 {/* 路由渲染 */}
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={()=>{
                        //嵌套子路由的时候不能加精准匹配exact 
                        return(
                            <Admin>
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