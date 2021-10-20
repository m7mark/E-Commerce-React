import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { LoginContainer } from "./LoginElements"

export const Login = () => {
  const [loginState, setLoginState] = useState({ username: '', password: '' });
  const dispatch = useDispatch()

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, loginState)
  }

  return (
    <>
      <LoginContainer>
        <input type="text" placeholder='username' onChange={handleChange} name='username' />
        <input type="password" placeholder='password' onChange={handleChange} name='password' />
        <button onClick={handleClick}>Login</button>
      </LoginContainer>
    </>
  )
}