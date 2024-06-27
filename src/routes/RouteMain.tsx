import { useEffect } from "react";
import { useLogin } from "../context/Context.provider";
import RouteAdmin from "./RouteAdmin";
import RouteDefault from "./RouteDefault";

function RouteMain() {
  const { isLoggedIn, login } = useLogin();

  useEffect(() => {
    const cachedData = localStorage.getItem("user");
    if (cachedData) {
      login();
    }
  }, [login]);

  return isLoggedIn ? <RouteAdmin /> : <RouteDefault />;
}

export default RouteMain;
