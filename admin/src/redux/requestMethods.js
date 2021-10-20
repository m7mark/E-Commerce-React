import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_API

let TOKEN
if (localStorage.getItem('persist:root')) {
  const currentUserRedux = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser
  currentUserRedux
    ? TOKEN = currentUserRedux.accessToken
    : TOKEN = null
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
})