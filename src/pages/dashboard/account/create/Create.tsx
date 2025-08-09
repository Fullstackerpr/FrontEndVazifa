import React, { useEffect, useState, type FormEvent } from "react";
import type { IData } from "../../../../types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../lib";
import { create, update } from "../../../../lib/features/createSlice";

const initialState: IData = {
  id: -1,
  fname: "",
  lname: "",
  phone: "",
};

const Create = () => {
  const navigate = useNavigate();
  const updateUser = useSelector((state: RootState) => state.users.updateUser);
  const dispatch = useDispatch();

  const [formUser, setFormUser] = useState<IData>(initialState);
  const [cancel, setCancel] = useState<boolean | null>(null);

  useEffect(() => {
    if (updateUser) {
      setFormUser(updateUser);
    }
  }, [updateUser]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setFormUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (updateUser) {
      dispatch(update(formUser));
      navigate("dashboard/account");
    } else {
      const newUser: IData = {
        ...formUser,
        id: Date.now(),
      };

      dispatch(create(newUser));
    }

    navigate("view");
    setFormUser(initialState);
  };

  const handleCancel = () => {
    setCancel(true); 
    navigate("/dashboard"); 
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-[40px] mx-auto rounded-[50px] w-[400px] h-[700px] border-8 overflow-hidden flex flex-col items-center"
      >
        <div className="w-[170px] h-10 mt-4 flex items-center justify-center rounded-[99px] shadow shadow-gray-600 relative bg-black overflow-hidden">
          <div className="absolute w-[60px] h-[14px] bg-black rounded-full border border-gray-700 shadow-inner flex items-center justify-center gap-2 px-2">
            <div className="w-[6px] h-[6px] bg-gray-800 rounded-full border border-gray-600"></div>
            <div className="w-[4px] h-[4px] bg-gray-700 rounded-full"></div>
          </div>
        </div>

        <div className="shadow shadow-gray-300 mt-[55px]">
          <div className="flex gap-15 text-[16px] px-4 pt-[5px]">
            <button
              type="button"
              className="cursor-pointer"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <h1 className="font-extrabold">New Contact</h1>
            <button className="cursor-pointer font-semibold text-blue-600">
              {updateUser ? "Save" : "Create"}
            </button>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="w-[80px] h-[80px] ml-6 shadow shadow-gray-600 rounded-[50%] bg-gray-400 font-extrabold flex items-center justify-center text-white text-3xl">
              C
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="fname"
                required
                id=""
                placeholder="First Name"
                value={formUser.fname}
                onChange={handleChange}
                className="text-[18px] focus:outline-none focus:border-none overflow-hidden "
              />
              <hr className="text-gray-300 mt-2 mb-2" />
              <input
                type="text"
                name="lname"
                id=""
                placeholder="Last Name"
                value={formUser.lname}
                onChange={handleChange}
                className="text-[18px] focus:outline-none focus:border-none overflow-hidden"
              />
            </div>
          </div>
          <div className="mt-10">
            <label htmlFor="" className="text-blue-600 pl-6">
              mobile: (+998) |{" "}
            </label>
            <input
              type="text"
              name="phone"
              required
              id=""
              placeholder="94 xxx xx xx"
              value={formUser.phone}
              onChange={handleChange}
              className="w-[210px] ml-2 text-[18px] focus:outline-none focus:border-none overflow-hidden"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Create);
