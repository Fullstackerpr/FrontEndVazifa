import { memo } from "react";
import { Input, type GetProps } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../api";

type OTPProps = GetProps<typeof Input.OTP>;

const Otp = () => {
  const [params] = useSearchParams()
  const encode = params.get("e")
  const email = atob(encode || "")
  const navigate = useNavigate()

  const sendOtp = useMutation({
    mutationFn: (data: any) => api.post("/auth/verify-email", data)
  })
  
  const onChange: OTPProps["onChange"] = (code) => {
    sendOtp.mutate({code,email}, {
      onSuccess: () => {
        navigate("/login")
      }
    } );
  };

  // let email = "laylo@gmail.com"
  // let encode = btoa(email)
  // console.log({encode});

  // let decode = atob(encode)
  // console.log({decode});
  
  

  
  
  return (
    <div className="Index">
      <h2>Otp</h2>
      <Input.OTP formatter={(str) => str.toUpperCase()} onChange={onChange} />
    </div>
  );
};

export default memo(Otp);
