import listData from './list.json'
export default{
    '/list/data'(obj){
        return listData
    },
    '/list/dis'(obj){
        listData.forEach(item=>{
            item.shopmenuFoods.forEach(j=>{
                if(j.name===obj.item.name){
                    if(obj.type==='add'){
                            ++j.mute
                    }else{
                        if(j.mute>0){
                            --j.mute
                          }  
                    }    
                }
            })
        })
        return listData
    }
}