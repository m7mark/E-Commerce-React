import { RightContainer } from "../components/AppElements"
import { NewProduct } from "../components/newProduct/NewProduct"
import { NewProductMui } from "../components/newProduct/NewProductMui"

// path='/newProduct'
export const ProductNewPage = () => {
  return (
    <RightContainer>
      <NewProductMui />
    </RightContainer>
  )
}