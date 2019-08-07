import ajax from "./ajax";
const BASE='/api'

export const reqAddress = (latitude,longitude)=>ajax({url:BASE+`/position/${latitude},${longitude}`})


export const reqCategorys = ()=>{
   return ajax({
        method:'GET',
        url:BASE+'/index_category'
    })
}


export const reqShops = ({latitude,longitude})=>{
    return ajax({
        url:BASE+'/shops',
        params:{
            latitude,
            longitude
        }
    })
}





