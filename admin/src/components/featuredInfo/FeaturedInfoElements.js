import styled from 'styled-components';

import {
  ArrowDownward,
  ArrowUpward,
} from '@material-ui/icons';

export const FeaturedInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const FeaturedItem = styled.div`
  flex:1;
  margin-right: 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
`
export const FeaturedTitle = styled.span`
  font-size: 20px;
`
export const FeaturedMoneyContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`
export const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: bold;
`
export const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`
export const FeaturedIconUp = styled(ArrowUpward)`
  font-size: 16px !important;
  margin-left: 5px;
  color: green;
`
export const FeaturedIconDown = styled(ArrowDownward)`
  font-size: 16px !important;
  margin-left: 5px;
  color: red;
`
export const FuteredSub = styled.span`
  font-size: 15px;
  color: grey;
`