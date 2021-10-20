import { RightContainer } from "../components/AppElements"
import { ProductEdit } from "../components/productEdit/ProductEdit"

// path='/product/:productId'
export const ProductPage = () => {
  return (
    <RightContainer>
      <ProductEdit />
    </RightContainer>
  )
}