import React, { Component } from 'react'
import "../App.css";
export default class Signup extends Component {
    constructor(){
        super();
        this.state={
            username: '',
            usernameerr:false,
            email:"",
            emailerr:false,
            password:"",
            passworderr:false,
        }
    }

    usernameHandler =(event)=>{
            this.setState({
                username:event.target.value
            },()=>{
                if(this.state.username.length<6){
                    this.setState({
                        usernameerr:true
                    })
                }else{
                    this.setState({
                        usernameerr:false
                    })
                }
            })
    }
    
    passwordHandler=(pass)=>{
        this.setState({
            password:pass.target.value
        },()=>{
            if(pass.target.value.length<=8){
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
  signUp=(event)=>{
      event.preventDefault();
      if(this.state.username&&this.state.email&&this.state.password) {
          window.location="Home/"
      }
    }
    render() {
        return (
            <div className="login">
                <h2 className="log">Sign Up</h2>
               <form className="m-auto w-25" onSubmit={this.signUp}>
                <div className="form-group">
                    <label className="label">Username</label>
                <input type="text" placeholder="Enter Username" className="form-control" value={this.state.username} onChange={this.usernameHandler}></input>
                <p>{this.state.usernameerr&&<span style={{color:"red"}}>Username should be atleast 6 characters length</span>}</p>
                </div>
                <div className="form-group">
                    <label className="label">Email Address</label>
                <input type="email" placeholder="Enter Email" className="form-control" value={this.state.email} onChange={this.emailHandler}></input>
                <div>{this.state.emailerr&& <span style={{color:"red"}}>Please enter valid email</span>}</div>
                </div>
                <div className="form-group">
                        <input type="text" className="form-control" placeholder="Password" value={this.state.password} onChange={this.passwordHandler} ></input>
                        <div>{this.state.passworderr&& <span style={{color:"red"}}>Password must be 8 characters length</span>}</div>
                    </div>
                    <input type="checkbox"></input> I accept the terms & conditions
                    <div style={{textAlign:"center"}}><button type="submit" className="btn btn-primary mt-5 btn-block"> Sign Up</button></div>
               </form>
            </div>
        )
    }
}
