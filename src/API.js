import axios from "axios";

export let endpoints ={
    'cites': '/city/city-district-lst',
}

export default axios.create({
    baseURL: 'http://127.0.0.1:8080/',
})