import React, { Component } from 'react';
import Mocknetwork from '../../until'
import './home.css'
class Main extends Component {
    state={
        data:[],
        defaultIndex:0,
        subData:[],
        isShow:true
    }
    tabData=(index,item)=>{
        this.setState({
            defaultIndex:index,
            subData:item.shopmenuFoods
        })
    }
    dis=(item,type)=>{
        Mocknetwork('/list/dis',{item,type}).then(data=>[
            this.setState({
                data:data
            })
        ])
    }
     //计算data的mute
   countMute=(type)=>{
    const {data} = this.state
    let num      = 0
    //计算mute
    data.forEach(item=>{
        item.shopmenuFoods.forEach(items=>{
            
            if(type==='num'){
                num+=items.mute
            }

            if(type==='price'){
                num+=items.mute*items.price
            }
        })
    })
    return num
}
    render() {
        const {data,defaultIndex,subData,isShow}=this.state
        console.log(this.state)
        return (
            // 选项卡
            <div className="main">
              <ul>
              {
                    data.map((item,index)=>{
                        return <li key={index} className={defaultIndex===index?'active':''} onClick={()=>this.tabData(index,item)}>{item.title}</li>
                    })
                }
              </ul>
              {/* 初始化显示的数据 */}
              <div className="content">
                {
                    subData.map((item,index)=>{
                        return <div key={index} style={{background:'#ccc'}}>
                           <div className="tit">
                            <div>{item.name}</div>
                            <img src={item.img}/>
                             <p>
                            <span onClick={()=>this.dis(item,'dis')}>-</span>
                            {item.mute}
                            <span onClick={()=>this.dis(item,'add')}>+</span>
                            </p>
                            <p>{item.price}</p>
                           </div>
                           
                           
                        </div>
                    })
                }
            </div>
              <div className="footer">
                  <span onClick={()=>this.setState({
                     isShow:!isShow
                  })}>购物车</span>
                  <span>总数:{this.countMute('num')}</span>
                  <span>总价:{this.countMute('price')}</span>
                  <span>去结算</span>
              </div>
              {
               isShow?<div className="alerts">
                   {
                       data.map(i=>{
                           return i.shopmenuFoods.map((j,index)=>{
                                if(j.mute>0){
                                    return <div key={index} style={{background:'#ccc'}}>
                                            <p>{j.name}</p>
                                            <p>
                                            <span onClick={()=>this.dis(j,'dis')}>-</span>
                                            {j.mute}
                                            <span onClick={()=>this.dis(j,'add')}>+</span>
                                            </p>
                                            <p>{j.price}</p>
                                        </div>
                                }
                               
                           })
                       })
                   }
               </div>:null
           }
            </div>
            
        );
    }
   //获取数据
            componentDidMount(){
                Mocknetwork('/list/data').then(data=>{
                    console.log(data)
                    this.setState({
                        data:data,
                        subData:data[0].shopmenuFoods
                    })
                })
}
}

export default Main;