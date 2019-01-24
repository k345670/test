import axios from 'axios'
import {Toast} from 'mint-ui'
export function FetchGet(url,params ={}){
    return new Promise((resolve,reject) =>{
        axios.get(url,{
            params 
        })
        .then(response => {
            if(response.data.status != 0){
                console.log(response)
                Toast({
                    duration:1000,
                    message:'网路错误！  请稍后重试'
                })
            }else{
                resolve(response.data.data);
            }
        })
        .catch(error => {
            Toast({
                duration:1000,
                message:'网路错误！请稍后重试'
            })
        })
    })

    }
export function FetchPost(url,params ={}){
    axios.post(url,{
        params
    })
    .then(response => {
        if(respomse.data.status != 0){
            Toast({
                duration:1000,
                message:'网路错误！请稍后重试'
            })
        }else{

        }
    })
    .catch(error => {
        Toast({
            duration:1000,
            message:'网路错误！ 请稍后重试'
        })
    })
}