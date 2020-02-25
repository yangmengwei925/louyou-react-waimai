import React, { Component } from 'react';
import {Switch,Route,Redirect,Link} from 'react-router-dom'
import './home.css'
import Main from './main'
//与仓库数据链接
import {connect} from 'react-redux'
class Home extends Component {
    state={
        defaultIndex:0,
       
    }
   
    render() {
        const {defaultIndex}=this.state
        return (
            <div className="wrap">
                    <div className="header">
                        {
                           this.props.headerList.map((item,index)=>{
                            return <li key={index} className={defaultIndex===index?'active':''} onClick={()=>{
                                this.setState({defaultIndex:index})
                                //带二级的参数
                                this.props.history.push(item.to)
                            }}>{item.title}</li>
                            
                        })
                        }
                    </div>
            <div className="main">
            <Switch>
                    {/* <Route path="/home/main" component={Main}></Route> */}
                    <Route path="/home/main" render={()=>{
                        return <Main data={this.props.location.state}></Main>
                    }}></Route>
                    <Route path="/home/talk" component={()=><div>评价</div>}></Route>
                    <Route path="/home/shop" component={()=><div>11</div>}></Route>
                 
                    <Redirect from="/home" to="/home/main"></Redirect>
                </Switch>
            </div>
             
            </div>
        );
    }
}
//仓库数据
let mapStateToProps=function(store){
   const {headerList}=store
   return {
       headerList
   }
}
let mapDispathProps=function(dispath){
    return {

    }
}
Home=connect(mapStateToProps,mapDispathProps)(Home)
export default Home;