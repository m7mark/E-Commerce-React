import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import App from "./App"
import { initializeRequest } from "./redux/apiCalls";
import { MainPreloader } from "./assets/MainPreloader/MainPreloader";

export const AppInitialize = () => {

  const dispatch = useDispatch()
  let initialized = useSelector((state) => state.init.initialized)
  useEffect(() => {
    initializeRequest(dispatch)
  }, [dispatch]);

  return (
    <>
      {initialized
        ? <App />
        : <MainPreloader />
      }
    </>
  )
}