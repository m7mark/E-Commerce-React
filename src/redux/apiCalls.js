import { publicRequest } from '../requestMethods';
import { initialized, initializedFailure } from './initializeSlice';
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from './userSlice';

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const initializeRequest = async (dispatch) => {
  try {
    const { data } = await publicRequest.get('/products')
    if (typeof data === 'object') dispatch(initialized())
  } catch {
    dispatch(initializedFailure())
  }
}