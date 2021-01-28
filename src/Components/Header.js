import React, { Component } from 'react';
import "../App.css";
import axios from "axios";
export default class Header extends Component {
    constructor(){
        super();
        this.state={
            task:[]
        }
    }
    componentDidMount(){
        axios.get("https://picsum.photos/id/"+Math.floor(Math.random()*100)+"/info")
        .then((posRes)=>{
            this.setState({
                task:posRes.data
            })
            
        },(errRes)=>{
            console.log(errRes)
        })
    }
    render() {
        const {task}=this.state;
        return (
            <div className="head">
             <div className="hd">
            <img src="https://i.postimg.cc/85cc30Mp/download.jpg" alt="" className="logo"></img> 
            </div>   
            <h2  className="task hd">TasksBoard</h2>
            <div style={{float:"right",marginRight:"2em"}} className="hd">
                <img className="logo " src={task.download_url} width='50px' height='60px' alt=""/>
            </div>
            </div>
        )
    }
}
