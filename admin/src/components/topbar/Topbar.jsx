import {
  Language,
  NotificationsNone,
  Settings,
} from '@material-ui/icons';

import { NavLink } from '../AppElements';

import {
  Logo,
  TopAvatar,
  TopbarContainer,
  TopbarIconContainer,
  TopbarWrapper,
  TopIconBadge,
  Topleft,
  Topright,
} from './TopbarElements';

export const Topbar = () => {
  return (
    <>
      <TopbarContainer>
        <TopbarWrapper>
          <Topleft>
            <NavLink to='/'>
              <Logo>mark.</Logo>
            </NavLink>
          </Topleft>
          <Topright>
            <TopbarIconContainer>
              <NotificationsNone />
              <TopIconBadge>2</TopIconBadge>
            </TopbarIconContainer>
            <TopbarIconContainer>
              <Language />
              <TopIconBadge>2</TopIconBadge>
            </TopbarIconContainer>
            <TopbarIconContainer>
              <Settings />
            </TopbarIconContainer>
            <TopAvatar src='https://images.pexels.com/photos/3754677/pexels-photo-3754677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' />
          </Topright>
        </TopbarWrapper>
      </TopbarContainer>
    </>
  )
}