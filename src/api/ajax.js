// 封装axios

import axios from 'axios'
import qs from 'qs'
axios.interceptors.request.use( config=> {
    const {method,data} = config
    if(method.toUpperCase()==='POST'&&data instanceof Object){
        config.data=qs.stringify(data)
    }
    return config
  })


  axios.interceptors.response.use(response =>{
    console.log(response.data)   
    return response.data 
  }, error=> { 
    alert(error.message)
    return new Promise(()=>{})
  });


  export default axios