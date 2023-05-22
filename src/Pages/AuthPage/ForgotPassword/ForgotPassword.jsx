import React from "react";
import ForgotPwd from "../../../components/AuthComponents/ForgotPassword/ForgotPassword";
import Style from "../../../components/AuthComponents/Style";

const ForgotPassword = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-2/3">
        <ForgotPwd />
      </div>
        <Style />
    </div>
  )
}

export default ForgotPassword
