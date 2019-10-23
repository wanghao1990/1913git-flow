import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import './index.less'
let navData=[
  {name:'首页',path:'/home'},
  {name:'设置',path:'/setting'},
  {
    name:'用户管理',
    path:'/user',
    children:[
      {name:'用户列表',path:'/user/list'},
      {name:'用户删除',path:'/user/del'}
    ]
  }
]
const {SubMenu} = Menu 
//自定义导航最终的是控制路由的跳转，应用的是编程式导航->路由对象
class CustomNav extends Component{
        renderItem=(data)=>{
          return data.map((item,index)=>{
            if(item.children){
              return (
                <SubMenu>
                  {this.renderItem(item.children)}
                </SubMenu>
              )
            }else{
              return <Menu.Item>{item.name}</Menu.Item>
            }
          })
        }
        render(){
            console.log(this,"自定义导航")
            return(
                <div className="login">
   
  <Menu style={{ width: 256 }} mode="vertical">
    {this.renderItem(navData)}
        {/* <Menu.Item>首页</Menu.Item>
        <Menu.Item>设置</Menu.Item>
    <SubMenu
      title='用户管理'>  
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="1">用户列表</Menu.Item>
        <Menu.Item key="2">用户删除</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>

    <SubMenu
      title='权限管理'>  
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="1">权限列表</Menu.Item>
        <Menu.Item key="2">权限删除</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu> */}
    {/* {navData.map((item,index)=>{
      if(item.children){
        //判断是否存在children这一项，如果存在则渲染
        return(
          <SubMenu>

          </SubMenu>
        )
          
        
      }
      return(
        <Menu.Item>{item.name}</Menu.Item>
      )
    })} */}
  </Menu>,
  
 </div>
            )
            
       }
    
    
}
export default withRouter(CustomNav)