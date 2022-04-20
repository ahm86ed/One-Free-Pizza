import axios from "axios";
const instance = axios.create({
  baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
  timeout: 5000,
  headers: {
    Authorization: 'basic c422ae7f-b56c-4b6e-94e1-79553b281d18'
  }
});
export default instance;