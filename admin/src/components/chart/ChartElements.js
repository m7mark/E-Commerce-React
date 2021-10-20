import styled from 'styled-components';

export const ChartContainer = styled.div`
  margin: ${({ margin }) => margin ? margin : '20px 20px 20px 0'};
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,.75);
`
export const ChartTitle = styled.h3`
  margin-bottom: 20px;
`