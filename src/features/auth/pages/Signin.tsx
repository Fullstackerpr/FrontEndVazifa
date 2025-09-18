import { memo, useState, type FormEvent } from "react";
import { useAuth } from "../service/useAuth";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [phone, setPhone] = useState("+998 "); 

  const { signIn } = useAuth();
  const { mutate: signInMutate, isPending, isError, error } = signIn;
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (!value.startsWith("+998")) {
      const onlyDigits = value.replace(/\D/g, "").replace(/^998/, "");
      value = "+998" + onlyDigits;
    }

    if (value.length < 4) {
      value = "+998";
    }

    setPhone(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const tel = phone;

    signInMutate(
      { phone: tel },
      {
        onSuccess: () => {
          navigate("/otp", { state: tel });
        },
      }
    );
  };

  return (
    <div className="Signin">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col border-2 border-[#c5bfbf] shadow-lg px-4 py-6 mx-auto mt-[50px] rounded-xl w-[400px]">
          <label>Telefon raqamingizni kiriting</label>
          <input
            type="tel"
            value={phone}
            onChange={handleChange}
            className="outline-0 mt-2.5"
            placeholder="XX..."
          />
          {isError && (
            <div className="text-red-600 pt-1">
              {error?.response?.data?.error?.message}
            </div>
          )}
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 cursor-pointer">
            {isPending ? "Kuting.." : "Davom etish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(Signin);
