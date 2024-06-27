import React, { useState } from "react";
import logo from "../../assets/img-main/logo-vivienda.png";
import { useLogin } from "../../context/Context.provider";
import axios from "axios";
import ENDPOINTS from "../../config";
import { addData } from "../../functions";
const Login: React.FC = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useLogin();

  const formData = new FormData();

  const handleChangeParam = (newParam: string) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("id");
    newSearchParams.set("search", newParam);
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  const handleLogin = async () => {
    if (!user && !password) {
      setError("Por favor, introduzca su usuario y contraseña");
    } else if (!user) {
      setError("Por favor, introduzca su usuario");
    } else if (!password) {
      setError("Por favor, introduzca su contraseña");
    } else {
      formData.append("user", user);
      formData.append("password", password);
      try {
        const response = await addData(axios, formData, ENDPOINTS.LOGIN);
        if (response.data.response.data) {
          const objectUser = {
            user: response.data.response.data,
            role: "admin",
          };
          localStorage.setItem("user", JSON.stringify(objectUser));
          handleChangeParam("admin");
          login();
          return;
        }

        setError("Credenciales incorrectas");
      } catch (e) {
        setError("Ocurrio un error inesperado");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="tejido-login absolute"></div>
      <div className="max-w-xs w-full z-10">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className=" flex flex-col gap-4 ">
            <img src={logo} alt="" className="w-full h-20" />
            <input
              id="user"
              name="user"
              type="text"
              autoComplete="text"
              required
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:border-blue-600 placeholder-gray-500 text-gray-900 sm:text-sm"
              placeholder="Correo electrónico"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:border-blue-600 placeholder-gray-500 text-red-600 sm:text-sm"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p className="mt-2 text-center text-sm text-red-600">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
