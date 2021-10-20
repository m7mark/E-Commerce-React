import styled from 'styled-components';

import { Visibility } from '@material-ui/icons';

export const WidgetSmContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
`
export const WidgetSmTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`
export const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
export const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`
export const WidgetSmImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
export const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`
export const WidgetSmUserName = styled.span`
  font-weight: 600;
`
export const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`
export const WidgetSmIcon = styled(Visibility)`
  font-size: 16px !important;
  margin-right: 5px;
`
export const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`