import { useEffect, useState } from 'react';
import { userRequest } from '../../redux/requestMethods';
import {
  WidgetSmButton,
  WidgetSmContainer,
  WidgetSmIcon,
  WidgetSmImg,
  WidgetSmList,
  WidgetSmListItem,
  WidgetSmTitle,
  WidgetSmUser,
  WidgetSmUserName,
  WidgetSmUserTitle,
} from './WidgetSmElements';

export const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true")
        setUsers(res.data)
      } catch (err) { }
    }
    getUsers()
  }, []);
  return (
    <>
      <WidgetSmContainer>
        <WidgetSmTitle>New users list</WidgetSmTitle>
        <WidgetSmList>
          {users.map((user) => (
            <WidgetSmListItem key={user.username}>
              <WidgetSmImg src={user.img || 'https://images.pexels.com/photos/1990240/pexels-photo-1990240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt='' />
              <WidgetSmUser>
                <WidgetSmUserName>{user.username}</WidgetSmUserName>
                <WidgetSmUserTitle>Engen</WidgetSmUserTitle>
              </WidgetSmUser>
              <WidgetSmButton>
                <WidgetSmIcon />
                Display
              </WidgetSmButton>
            </WidgetSmListItem>
          ))}
        </WidgetSmList>
      </WidgetSmContainer>
    </>
  )
}