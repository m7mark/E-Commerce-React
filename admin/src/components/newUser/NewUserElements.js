import styled from 'styled-components'

export const NewUserTitle = styled.h1`
  
`
export const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`
export const FormItem = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`
export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: gray;
`
export const FormInput = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`
export const NewUserGender = styled.div`
& > label {
  margin: 10px;
  font-size: 18px;
  color: #555;
}
& > input {
  margin-top: 15px;
}
`
export const NewUserSelect = styled.select`
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
`
export const NewUserButton = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`