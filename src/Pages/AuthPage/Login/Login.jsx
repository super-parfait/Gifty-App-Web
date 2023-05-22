import React from "react";
import SignIn from "../../../components/AuthComponents/Login/Login";
import Style from "../../../components/AuthComponents/Style";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-2/3">
        <SignIn />
      </div>
        <Style />
    </div>
  )
}

export default Login
