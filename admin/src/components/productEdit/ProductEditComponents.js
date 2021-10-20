import styled from 'styled-components'

export const ProductTitleContainer = styled.div`
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
export const ProductTop = styled.div`
  display: flex;
`
export const ProductTopLeft = styled.div`
  flex:1;
`
export const ProductTopRight = styled.div`
  padding-top: 50px;
  padding-left: 20px;
  margin-top: 20px;
  flex:1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
`
export const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`
export const ProductInfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`
export const ProductName = styled.span`
  font-weight: 600;
`
export const ProductInfoBottom = styled.div`
  margin-top: 10px;
`
export const ProductInfoItem = styled.div`
  /* width: 150px; */
  display: flex;
  justify-content: start;
`
export const ProductInfoKey = styled.span`
  font-weight: 600;
`
export const ProductInfoValue = styled.span`
  font-weight: 300;
  margin-left: 5px;
`
export const ProductBottom = styled.div`
  padding: 20px;
  margin-top: 20px;
  flex:1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
`
export const ProductForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ProductFormLeft = styled.div`
  width: 400px;
`
export const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-right: 50px;
  width: 150px;
`
export const ProductUpload = styled.div`
  display: flex;
  align-items: center;
  & > input {
    display: none;
  }
`
export const ProductUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`
export const ProductButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`