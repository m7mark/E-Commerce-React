import axios from 'axios';

const BASE_URL ='http://localhost:5000/api/'
const TOKEN ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDQ4NzdlMmI4NzcwNjk2MTA4OTc4MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzA1MTAwNSwiZXhwIjoxNjMzMzEwMjA1fQ.kgSEInTrE-0EnMp-XBgYgZfZWDuDj9xOAsddB2K4vQk'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {token:`Bearer ${TOKEN}`}
})