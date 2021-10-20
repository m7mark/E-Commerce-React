import { CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Publish, Search } from '@material-ui/icons'
import styled from 'styled-components'

export const UserTitleComtainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.h1`
  display: flex;
`
export const AddBtn = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
`
export const UserEditContainer = styled.div`
  display: flex;
  margin-top: 20px;
`
export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
`
export const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`
export const UserShowImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  `
export const UserShowTitle = styled.div`
  display: flex;
  flex-direction: column;
`
export const UserShowUsername = styled.span`
  font-weight: 600;
`
export const UserShowDesc = styled.span`
  font-weight: 300;
`
export const UserShowBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const UserBottomTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175,170,170);
`
export const UserBottomInfoContainer = styled.span`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #444;
`
export const UserBottomIconUsername = styled(PermIdentity)`
  font-size: 16px !important;
`
export const UserBottomIconYear = styled(CalendarToday)`
  font-size: 16px !important;
`
export const UserBottomIconPhone = styled(PhoneAndroid)`
  font-size: 16px !important;
`
export const UserBottomIconMail = styled(MailOutline)`
  font-size: 16px !important;
`
export const UserBottomIconLocate = styled(Search)`
  font-size: 16px !important;
`
export const UserBottomInfoTitle = styled.span`
  margin-left: 10px;
`
export const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
  margin-left: 20px;
`
export const UserUpdateForm = styled.form`
  display: flex;
  /* align-items: stretch; */
  justify-content: space-between;
  margin-top: 20px;
`
export const UserUpdateLeft = styled.div`
  width: 300px;
`
export const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-right: 30px;
`
export const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`
export const UserUpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`
export const UserUpdateUploadInput = styled.input`
  display: none;
`
export const UserUpdateBtn = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 5px;
  background-color: darkblue;
  color: whitesmoke;
  font-weight: 600;
`
export const UserUpdateUploadIcon = styled(Publish)`
  cursor: pointer;
`
