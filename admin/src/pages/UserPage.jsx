import { RightContainer } from "../components/AppElements"
import { UserEdit } from "../components/userEdit/UserEdit"

// path='/user/:userId'
export const UserPage = () => {
  return (
    <RightContainer>
      <UserEdit />
    </RightContainer>
  )
}