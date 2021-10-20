import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { NavLink } from '../AppElements';
import {
  SidebarContainer,
  SidebarIcon1,
  SidebarIcon10,
  SidebarIcon11,
  SidebarIcon12,
  SidebarIcon2,
  SidebarIcon3,
  SidebarIcon4,
  SidebarIcon5,
  SidebarIcon6,
  SidebarIcon7,
  SidebarIcon8,
  SidebarIcon9,
  SidebarList,
  SidebarListItem,
  SidebarMenu,
  SidebarTitle,
  SidebarWrapper,
} from './Sidebar.Elements';

export const Sidebar = () => {
  const dispatch = useDispatch()
  const logoutClick = () => {
    dispatch(logout())
  }

  return (
    <>
      <SidebarContainer>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarTitle>Dashboard</SidebarTitle>
            <SidebarList>
              <NavLink to='/'>
                <SidebarListItem hover>
                  <SidebarIcon1 />
                  Home
                </SidebarListItem>
              </NavLink>
              <SidebarListItem>
                <SidebarIcon2 />
                Analytics
              </SidebarListItem>
              <SidebarListItem>
                <SidebarIcon3 />
                Sales
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarTitle>Quick menu</SidebarTitle>
            <SidebarList>
              <NavLink to='/users'>
                <SidebarListItem hover>
                  <SidebarIcon4 />
                  Users
                </SidebarListItem>
              </NavLink>
              <NavLink to='/products'>
                <SidebarListItem hover>
                  <SidebarIcon5 />
                  Products
                </SidebarListItem>
              </NavLink>
              <SidebarListItem>
                <SidebarIcon6 />
                Transactions
              </SidebarListItem>
              <SidebarListItem>
                <SidebarIcon7 />
                Reports
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarTitle>Notifications</SidebarTitle>
            <SidebarList>
              <SidebarListItem>
                <SidebarIcon8 />
                Mail
              </SidebarListItem>
              <SidebarListItem>
                <SidebarIcon9 />
                Feedback
              </SidebarListItem>
              <SidebarListItem>
                <SidebarIcon10 />
                Messages
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarTitle>Staff</SidebarTitle>
            <SidebarList>
              <SidebarListItem>
                <SidebarIcon11 />
                Manage
              </SidebarListItem>
              <SidebarListItem>
                <SidebarIcon2 />
                Analytics
              </SidebarListItem>
              <SidebarListItem hover onClick={logoutClick}>
                <SidebarIcon12 />
                Log out
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}