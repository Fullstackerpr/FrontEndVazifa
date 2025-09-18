import { memo, useRef, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../store/authSlice";
import { useAuth } from "../service/useAuth";

const Otp = () => {
  const code = useRef<HTMLInputElement | null>(null);
  const { verifyOtp } = useAuth();
  const { mutate: verifyOtpMutate, isPending, isError, error } = verifyOtp;
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    verifyOtpMutate(
      { otp: code.current?.value || "", phone: state },
      {
        onSuccess: (res) => {
          console.log(res);
          if (res.AcsesToken) {
            dispatch(setToken(res.AcsesToken));
            navigate("/");
          } else {
            navigate("/upload-file", { state: res.data.id });
          }
        },
      }
    );
  };

  return (
    <div className="Otp">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col border-2 border-[#c5bfbf] shadow-lg px-4 py-6 mx-auto mt-[50px] rounded-xl w-[400px]">
          <label htmlFor="otp">Raqamni tasdiqlash kodi yuborildi</label>
          <input
            ref={code}
            id="otp"
            type="number"
            className="outline-0 mt-2.5 border px-2 py-1 rounded"
          />
          {isError && (
            <div className="text-red-600 pt-1">
              {error?.response?.data?.error?.message}
            </div>
          )}
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 cursor-pointer"
            disabled={isPending}
          >
            {isPending ? "Kuting..." : "Davom etish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(Otp);
