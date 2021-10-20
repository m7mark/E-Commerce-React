import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { ProductListPage } from "../pages/ProductListPage"
import { ProductNewPage } from "../pages/ProductNewPage"
import { ProductPage } from "../pages/ProductPage"
import { UserListPage } from "../pages/UserListPage"
import { UserNewPage } from "../pages/UserNewPage"
import { UserPage } from "../pages/UserPage"

export const privatRoutes = [
  { path: '/products', component: ProductListPage, exact: true },
  { path: '/newProduct', component: ProductNewPage, exact: true },
  { path: '/product/:productId', component: ProductPage, exact: false },
  { path: '/users', component: UserListPage, exact: true },
  { path: '/newUser', component: UserNewPage, exact: true },
  { path: '/user/:userId', component: UserPage, exact: false },
  { path: '/', component: HomePage, exact: true },
]
export const publicRoutes = [
  { path: '/login', component: LoginPage, exact: true }
]