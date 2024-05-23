import { useEffect, useState } from "react";
import { useLogin } from "../context/Context.provider";
import RouteAdmin from "./RouteAdmin";
import RouteDefault from "./RouteDefault";

function RouteMain() {
  const { isLoggedIn, login } = useLogin();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem("user");
    if (cachedData) {
      login();
    }
    setLoading(false);
  }, [login]);

  if (loading) {
    return <div>Loading...</div>; // O cualquier componente de carga que prefieras
  }

  return isLoggedIn ? <RouteAdmin /> : <RouteDefault />;
}

export default RouteMain;
