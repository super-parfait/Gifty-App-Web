import React from "react";
import OtpPwd from "../../../components/AuthComponents/OtpPassword/OtpPassword";
import Style from "../../../components/AuthComponents/Style";

const OtpPassword = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-2/3">
        <OtpPwd />
      </div>
        <Style />
    </div>
  )
}

export default OtpPassword
