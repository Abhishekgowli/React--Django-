import {API} from '../../backend'

export const getmetoken=(userId,token)=>{
    return fetch(`${API}payment/gettoken/${userId}/${token}/`, {
        method:"GET",
    })
    .then((responce)=>{
        console.log(responce)
        return responce.json()
    })
    .catch((err)=>{console.log(err)})
}
export const processPayment=(userid,token,paymentinfo)=>{
    const fromData=new FormData();
    for(const name in paymentinfo){
        fromData.append(name,paymentinfo[name])

    }
    return fetch(`${API}payment/process/${userid}/${token}/`,{
        method:"POST",
        body:fromData,
    })
    .then((responce)=>{
        console.log("p-0", responce);
        return responce.json()
    })
    //.catch((err)=>console.log(err))


}