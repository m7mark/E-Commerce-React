import { useEffect, useState } from 'react';
import { userRequest } from '../../redux/requestMethods';
import {
  FeaturedIconDown,
  FeaturedIconUp,
  FeaturedInfoContainer,
  FeaturedItem,
  FeaturedMoney,
  FeaturedMoneyContainer,
  FeaturedMoneyRate,
  FeaturedTitle,
  FuteredSub,
} from './FeaturedInfoElements';

export const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('orders/income')
        setIncome(res.data)
        setPerc((res.data[1].total * 100) / res.data[0].total - 100)
      }
      catch (err) { }
    }
    getIncome()
  }, []);

  return (
    <>
      <FeaturedInfoContainer>
        <FeaturedItem>
          <FeaturedTitle>Revanue</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>${income[0] && income[1]?.total}</FeaturedMoney>
            <FeaturedMoneyRate>{Math.floor(perc)}%
              {perc < 0 ? <FeaturedIconDown /> : <FeaturedIconUp />}
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FuteredSub>Compared to last month</FuteredSub>
        </FeaturedItem>
        <FeaturedItem>
          <FeaturedTitle>Sales</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>$265</FeaturedMoney>
            <FeaturedMoneyRate>-1.2 <FeaturedIconDown /></FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FuteredSub>Compared to last month</FuteredSub>
        </FeaturedItem>
        <FeaturedItem>
          <FeaturedTitle>Cost</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>$26875</FeaturedMoney>
            <FeaturedMoneyRate>+441.2 <FeaturedIconUp /></FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FuteredSub>Compared to last month</FuteredSub>
        </FeaturedItem>
      </FeaturedInfoContainer>
    </>
  )
}