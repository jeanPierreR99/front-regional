import React, { useState } from "react";
import logo from "../../assets/logo-vivienda.png";
import { useLogin } from "../../context/Context.provider";
const Login: React.FC = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useLogin();

  const handleChangeParam = (newParam: string) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("id");
    newSearchParams.set("search", newParam);
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  const handleLogin = () => {
    if (!user || !password) {
      setError("Por favor, introduce tu correo electrónico y contraseña.");
    } else {
      if (user == "admin" && password == "12345678") {
        const objectUser = {
          user: user,
          password: password,
        };
        localStorage.setItem("user", JSON.stringify(objectUser));
        handleChangeParam("admin")
        login();
        return
      }
    }
    setError("credenciales incorrectas");
    console.log("Iniciando sesión...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-200">
            Iniciar sesión
          </h2>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className=" flex flex-col gap-2 ">
            <img src={logo} alt="" className=" object-scale-down" />
            <input
              id="user"
              name="user"
              type="text"
              autoComplete="text"
              required
              className="rounded-md w-full px-3 py-2 border border-gray-800 focus:border-[#3183a9] placeholder-gray-500 text-gray-300 focus:outline-none sm:text-sm bg-black/40"
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
              className="rounded-md w-full px-3 py-2 border border-gray-800 focus:border-[#3183a9] placeholder-gray-500 text-gray-300 focus:outline-none sm:text-sm bg-black/40"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p className="mt-2 text-center text-sm text-red-600">{error}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
