import styled from 'styled-components';

export const WidgetLgContainer = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
`

export const WidgetLgTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`
export const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`
export const WidgetLgTr = styled.tr`
  
`
export const WidgetLgTh = styled.th`
  text-align: left;
`
export const WidgetLgImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`
export const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`
export const WidgetLgDate = styled.td`
  font-weight: 300;
`
export const WidgetLgAmount = styled.td`
  font-weight: 300;
`
export const WidgetLgStatus = styled.td`
  
`
export const WidgetLgUserName = styled.span``
export const WidgetLgButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 7px 10px;
  background-color: ${({type}) => type === 'approved' && '#e5faf2'};
  background-color: ${({type}) => type === 'declined' && '#fff0f1'};
  background-color: ${({type}) => type === 'pending' && '#ebf1fe'};
  color: ${({type}) => type === 'approved' && '#3bb077'};
  color: ${({type}) => type === 'declined' && '#d95087'};
  color: ${({type}) => type === 'pending' && '#2a7ade'};
`