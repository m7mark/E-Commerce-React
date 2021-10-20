import { Link } from "react-router-dom"
import { CommonEditForm } from "../AppElements"
import { AddBtn, Title, UserBottomIconLocate, UserBottomIconMail, UserBottomIconPhone, UserBottomIconUsername, UserBottomIconYear, UserBottomInfoContainer, UserBottomInfoTitle, UserBottomTitle, UserEditContainer, UserShow, UserShowBottom, UserShowDesc, UserShowImg, UserShowTitle, UserShowTop, UserShowUsername, UserTitleComtainer, UserUpdate, UserUpdateBtn, UserUpdateForm, UserUpdateImg, UserUpdateLeft, UserUpdateRight, UserUpdateUpload, UserUpdateUploadIcon, UserUpdateUploadInput } from "./UserEditComponents"

export const UserEdit = () => {
  return (
    <>
      <UserTitleComtainer>
        <Title>Edit User</Title>
        <Link to='/newUser'>
          <AddBtn>Create</AddBtn>
        </Link>
      </UserTitleComtainer>
      <UserEditContainer>
        <UserShow>
          <UserShowTop>
            <UserShowImg src='https://images.pexels.com/photos/1902306/pexels-photo-1902306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' />
            <UserShowTitle>
              <UserShowUsername>Anna Baker</UserShowUsername>
              <UserShowDesc>Soft Engeneer</UserShowDesc>
            </UserShowTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserBottomTitle>Account Detail</UserBottomTitle>
            <UserBottomInfoContainer>
              <UserBottomIconUsername />
              <UserBottomInfoTitle>annabaker44</UserBottomInfoTitle>
            </UserBottomInfoContainer>
            <UserBottomInfoContainer>
              <UserBottomIconYear />
              <UserBottomInfoTitle>12.343.33</UserBottomInfoTitle>
            </UserBottomInfoContainer>
            <UserBottomTitle>Contacts Detail</UserBottomTitle>
            <UserBottomInfoContainer>
              <UserBottomIconPhone />
              <UserBottomInfoTitle>+789283998283</UserBottomInfoTitle>
            </UserBottomInfoContainer>
            <UserBottomInfoContainer>
              <UserBottomIconMail />
              <UserBottomInfoTitle>2e2ee22@djied.com</UserBottomInfoTitle>
            </UserBottomInfoContainer>
            <UserBottomInfoContainer>
              <UserBottomIconLocate />
              <UserBottomInfoTitle>Moscow, Russsia</UserBottomInfoTitle>
            </UserBottomInfoContainer>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>
          <UserUpdateForm>
            <UserUpdateLeft>
              <CommonEditForm>
                <label>Username</label>
                <input type='text' placeholder='annabaker44'></input>
                <label>Full name</label>
                <input type='text' placeholder='Anna'></input>
                <label>E-mail</label>
                <input type='text' placeholder='2e2ee22@djied.com'></input>
                <label>Phone</label>
                <input type='text' placeholder='+789283998283'></input>
                <label>Address</label>
                <input type='text' placeholder='Moscow, Russsia'></input>
              </CommonEditForm>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImg src='https://images.pexels.com/photos/1902306/pexels-photo-1902306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' />
                <label htmlFor='file'><UserUpdateUploadIcon /></label>
                <UserUpdateUploadInput type='file' id='file' />
              </UserUpdateUpload>
              <UserUpdateBtn>Update</UserUpdateBtn>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserEditContainer>
    </>
  )
}