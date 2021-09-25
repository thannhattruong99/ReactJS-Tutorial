import axios from "axios";
import cookies from 'react-cookies'

export let endpoints ={
    'cites': '/city/city-district-lst',
    'categories': '/admin/categories?searchValue=&searchField=&pageNum=0&fetchNext=0&statusId=0',
    // product remove pageNum
    'products': '/admin/products?searchValue=&searchField=&fetchNext=0&categoryId=0&statusId=0&pageNum=',
    'user': '/admin/manager/create',
    'login': '/login',
    'user-detail': 'admin/manager?userName='
}


// 'Authorization': `Bearer ${cookies.load('token')}`
// khai báo ở đây thì token chỉ nạp 1 lần
export let AuthAPI = axios.create({
    baseURL: 'http://localhost:8080/',
    headers:{
        'Authorization': `Bearer ${cookies.load('token')}`,
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
})

export default  axios.create({
    baseURL: 'http://localhost:8080/',
    headers:{
        // 'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsIlVzZXJOYW1lIjoiYWRtaW4iLCJVc2VySWQiOiJmNGE5NDk1ZC1jZTg5LTExZWItYWM5My00MjAxMGE5NDAwM2YiLCJleHAiOjE2MzI1NzAyNzksIlJvbGVJZCI6MSwiaWF0IjoxNjMyNTUyMjc5fQ.ILlFvRIozU2UzD4bKKaDAvP5IkSjeP7-Oj0RVYUAkWLAZrr-A9csjIccSo2pxbRce0sPzt2ImqU-uiUGePFnow',
        'Accept': '*/*',
        'Content-Type': 'application/json'
    },
})