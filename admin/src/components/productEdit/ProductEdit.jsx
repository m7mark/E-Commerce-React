import { Publish } from "@material-ui/icons"
import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { userRequest } from "../../redux/requestMethods"
import { CommonEditForm } from "../AppElements"
import { Chart } from "../chart/Chart"
import { AddBtn, Title, ProductBottom, ProductTop, ProductTopLeft, ProductTopRight, ProductInfoTop, ProductInfoBottom, ProductInfoImg, ProductName, ProductInfoItem, ProductInfoKey, ProductInfoValue, ProductForm, ProductFormRight, ProductFormLeft, ProductUpload, ProductUploadImg, ProductButton, ProductTitleContainer } from "./ProductEditComponents"

export const ProductEdit = () => {
  const location = useLocation()
  const productId = location.pathname.split('/')[2]
  const product = useSelector(state => state.product.products.find(product => product._id === productId))
  const [pStats, setPStats] = useState([]);
  const MONTH = useMemo(() => [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ], [])

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/orders/income?pid=" + productId)
        const list = res.data.sort((a, b) => {
          return a._id - b._id
        })
        list.map((item) => (
          setPStats((prev) => [
            ...prev,
            { name: MONTH[item._id - 1], Sales: item.total }
          ]))
        )
      } catch (err) { }
    }
    getStats()
  }, [MONTH, productId]);

  return (
    <>
      <ProductTitleContainer>
        <Title>Edit Product</Title>
        <Link to='/newProduct'>
          <AddBtn>Create</AddBtn>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart margin='20px 20px 0 0' data={pStats} dataKey='Sales' title='Sales Performance' />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductInfoImg src={product.img} alt='' />
            <ProductName>{product.title}</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id:</ProductInfoKey>
              <ProductInfoValue>{product._id}</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>sales:</ProductInfoKey>
              <ProductInfoValue>5223</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>in stock:</ProductInfoKey>
              <ProductInfoValue>{product.inStock ? 'yes' : 'no'}</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <CommonEditForm>
              <label>Product name</label>
              <input type="text" placeholder={product.title} />
              <label>Product description</label>
              <input type="text" placeholder={product.desc} />
              <label>Product price</label>
              <input type="text" placeholder={product.price} />
              <label>In stock</label>
              <select name="in stock" id="idStock">
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </CommonEditForm>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImg src={product.img} alt='' />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id='file' />
            </ProductUpload>
            <ProductButton>Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </>
  )
}