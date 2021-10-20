import styled from 'styled-components';

import {
  Assessment,
  AttachMoney,
  ChatBubble,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PersonOutline,
  Portrait,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
} from '@material-ui/icons';

export const SidebarContainer = styled.div`
  flex: 1;
  /* height: calc(100vh - 50px); */
  background-color: rgb(251,251,255);
  position: sticky;
  top: 50px;
`
export const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`
export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`
export const SidebarTitle = styled.h3`
  font-size: 13px;
  color: gray;
`
export const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`
export const SidebarListItem = styled.li`
  cursor: ${({ hover }) => hover ? 'pointer' : 'default'};
  padding: 5px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: ${({ active }) => active && '#e4e4ff'};


  &:hover {
    background-color: ${({ hover }) => hover ? 'rgb(228,228,255)' : 'transparent'};
  }
`
export const SidebarIcon1 = styled(LineStyle)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon2 = styled(Timeline)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon3 = styled(TrendingUp)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon4 = styled(PersonOutline)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon5 = styled(Storefront)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon6 = styled(AttachMoney)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon7 = styled(Assessment)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon8 = styled(MailOutline)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon9 = styled(DynamicFeed)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon10 = styled(ChatBubble)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon11 = styled(Portrait)`
  margin-right: 5px;
  font-size: 20px !important;
`
export const SidebarIcon12 = styled(Report)`
  margin-right: 5px;
  font-size: 20px !important;
`