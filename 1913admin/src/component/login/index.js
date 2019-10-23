import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox,Card,message } from 'antd';



class Login extends React.Component {
  submit=()=>{
      console.log('登录')
    //   let result = this.props.form.getFieldsValue()
    //   console.log(result)
    this.props.form.validateFields((err,data)=>{
        if(err){
            message.error('输入有重新输入')
        }else{
             message.success('输入正确1s后跳转页面',1,()=>{
                this.props.history.push('/admin')
             })
        }
        console.log(err,data)
    })
  }  
  render() {
    console.log(this,'登录组件')
    let {getFieldDecorator}= this.props.form
    return (
        <Card style={{width:'400px',position:'fixed',top:'15Vh',right:'150px'}}>
      <div className="login-form">
        <Form.Item>

          {getFieldDecorator('us',{
              //限制输入名和密码的长度
              rules:[{required:true,message:'请输入正确的用户名!'},
                    {min:6,message:'用户名长度为6到9位'},//最小长度
                    {max:9,message:'用户名长度为6到9位'}//最大长度
            ]
          })(<Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />)}
        </Form.Item>

        <Form.Item>
            {getFieldDecorator('ps',{})(
                <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
            )}
            
        </Form.Item>
        <Form.Item>
          (<Checkbox>Remember me</Checkbox>)
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" onClick={this.submit} className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
    
      </div>
      </Card>
    )
}
}

    

export default Form.create()(Login)