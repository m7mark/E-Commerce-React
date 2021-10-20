import { Redirect, Route, Switch } from "react-router";
import { privatRoutes, publicRoutes } from ".";
import { AppContainer } from "../components/AppElements";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Topbar } from "../components/topbar/Topbar";
import { useSelector } from "react-redux";

// const currentUserRedux = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.isAdmin;

export const AppRouter = () => {

  const isAdmin = useSelector(state => state.user.currentUser?.isAdmin)
  return (
    <>
      {isAdmin
        ? <>
          <Topbar />
          <AppContainer>
            <Sidebar />
            <Switch>
              {privatRoutes.map(route =>
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              )}
              <Redirect to='/' />
            </Switch>
          </AppContainer>
        </>
        : <Switch>
          {publicRoutes.map(route =>
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          )}
          <Redirect to='/login' />
        </Switch>
      }
    </>
  )
}