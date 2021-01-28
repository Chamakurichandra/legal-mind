import React, { Component } from 'react'
import "../App.css";
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            emailerr:false,
            password:"",
            passworderr:false
        }
    }  
    emailHandler =(event)=>{
        this.setState({
              email:event.target.value
        },()=>{
            let emailRegex = /^[a-zA-z0-9]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9]*)\.)[a-zA-Z]+$/gm;
              if(emailRegex.test(this.state.email)) {
                  this.setState({
                      emailerr: false
                  })
              } else {
                  this.setState({
                      emailerr: true
                  })
              }
        })
    }

    passwordHandler =(event)=>{
            this.setState({
                password:event.target.value
            },()=>{
                if(event.target.value.length<=8){
                    this.setState({
                        passworderr:true
                    })

                }else{
                    this.setState({
                        passworderr:false
                    })
                }
            })
    }

    login=(event)=>{
        event.preventDefault();
        if(this.state.email&&this.state.password){
            window.location="Home/"
        }
    }
    render() {
        return (
            <div className="login">
                <h2 className="log">Login!</h2>
                <form className="m-auto w-25" onSubmit={this.login}> 
                    <div className="form-group">
                        <label className="label">Email Address</label>
                    <input type="text"  placeholder="Enter Email Address" className="form-control" value={this.state.email} onChange={this.emailHandler}></input>
                    <div>{this.state.emailerr&& <span style={{color:"red"}}>Please enter valid email</span>}</div>
                    </div>
                    <div className="form-group">
                        <label className="label">Password</label>
                    <input type="text" placeholder="Enter password" className="form-control" value={this.state.password} onChange={this.passwordHandler}></input>
                    <div>{this.state.passworderr&& <span style={{color:"red"}}>Password must be 8 characters length</span>}</div>
                    </div>
                    <input type="checkbox"></input> Remember me
                    <a href="#1" style={{float:"right"}}>Forgot Password?</a>
                  <div style={{textAlign:"center"}}> <button type="submit" className="btn btn-primary mt-5 btn-block " >Log in</button></div>
                    <div style={{margin:"1em 0"}}>Don't have an account? <a href="/Signup">Sign up here!</a></div>
                </form>
            </div>
        )
    }
}
