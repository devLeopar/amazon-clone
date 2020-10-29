import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challange-7c2c5.cloudfunctions.net/api' //THE API {cloud function} URL
    //http://localhost:5001/challange-7c2c5/us-central1/api for local development
});

export default instance
