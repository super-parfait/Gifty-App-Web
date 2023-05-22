import React from "react";
import ResetPwd from "../../../components/AuthComponents/ResetPassword/ResetPassword";
import Style from "../../../components/AuthComponents/Style";

const ResetPassword = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-2/3">
        <ResetPwd />
      </div>
        <Style />
    </div>
  )
}

export default ResetPassword
