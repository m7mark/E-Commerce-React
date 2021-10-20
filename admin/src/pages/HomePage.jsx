import { useEffect, useMemo, useState } from 'react';
import {
  HomePageWidgets,
  RightContainer,
} from '../components/AppElements';
import { Chart } from '../components/chart/Chart';
import { FeaturedInfo } from '../components/featuredInfo/FeaturedInfo';
import { userRequest } from '../redux/requestMethods';
import { WidgetLg } from '../components/widgetLg/WidgetLg';
import { WidgetSm } from '../components/widgetSm/WidgetSm';

// path='/'
export const HomePage = () => {
  const [userStat, setUserStat] = useState([]);
  const MONTH = useMemo(() => [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ], [])

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats')
        const list = res.data.sort((a, b) => {
          return a._id - b._id
        })
        list.map((item) => (
          setUserStat((prev) => [
            ...prev,
            { name: MONTH[item._id - 1], 'Active user': item.total }
          ]))
        )
      } catch (err) { }
    }
    getStats()
  }, [MONTH]);

  return (
    <>
      <RightContainer>
        <FeaturedInfo />
        <Chart
          data={userStat}
          title="User Analytics"
          grid
          dataKey='Active user'
        />
        <HomePageWidgets>
          <WidgetSm />
          <WidgetLg />
        </HomePageWidgets>
      </RightContainer>
    </>
  )
}