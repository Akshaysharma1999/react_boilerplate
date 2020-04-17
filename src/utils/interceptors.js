export default function(api)
{
    api.interceptors.request.use(request=>{
    console.log('REQUEST_SENT')
    request.headers.token=""
    return request
    },error=>{
        console.log("err")
    })
}