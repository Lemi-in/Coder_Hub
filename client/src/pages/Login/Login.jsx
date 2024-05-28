import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginAuth } from "../../utils/api/auth.api";

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginAuth({ email: auth.email, password: auth.password }, dispatch);
  };

  return (
    <div className="w-screen h-screen bg-dark-blue flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
        <h1 className="font-extrabold text-3xl text-light-blue">Coder Hub</h1>
          <span className="text-lg font-semibold text-light-gray">
            Create Your Account and Connect with Developers or login into your
            account to continue.
          </span>
        </div>
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <form onSubmit={handleLogin}>
            <div className="bg-darker-gray h-[300px] p-[20px] rounded-md flex flex-col justify-between shadow-lg">
              <input
                type="email"
                placeholder="email"
                style={{ color: "black" }}
                className="h-[50px] rounded-md border border-gray-500 text-lg p-[20px] focus:outline-none"
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    email: e.target.value,
                  });
                }}
                required
              />
              <input
                type="password"
                placeholder="password"
                style={{ color: "black" }}
                className="h-[50px] rounded-md border border-gray-500 text-lg p-[20px] focus:outline-none"
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    password: e.target.value,
                  });
                }}
                required
                minLength={3}
              />
              <button className="h-[50px] rounded-lg bg-blue-700 hover:bg-blue-800 transition text-white text-lg font-bold">
                {isFetching ? "Logging In" : "Login"}
              </button>
              <span className="text-center text-light-blue cursor-pointer">
                forgot password?
              </span>
              <button className="h-[50px] w-1/2 rounded-lg bg-orange-700 hover:bg-orange-800 transition text-white text-lg font-bold self-center">
                Create A New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
