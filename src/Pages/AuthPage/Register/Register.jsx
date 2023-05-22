import React from "react";
import SignUp from "../../../components/AuthComponents/Register/Register";
import Style from "../../../components/AuthComponents/Style";

const Register = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-2/3">
        <SignUp />
      </div>
        <Style />
    </div>
  )
}

export default Register
