import { memo } from "react";
import { NavLink } from "react-router-dom";
import logoo from "../assets/logoo.svg";
import { ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("translation");

  return (
    <div className="bg-[#E1EDE6] py-[28px]">
      <div className="container flex justify-between">
        <div>
          <img src={logoo} alt="" />
        </div>
        <div className="flex items-center gap-[58px] text-[20px] font-medium text-[#2C2D35]">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#598d66] underline underline-offset-5" : ""}`
            }
            to={"/"}
          >
            {t("repro")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#598d66] underline underline-offset-5" : ""}`
            }
            to={"/about"}
          >
            {t("news")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#598d66] underline underline-offset-5" : ""}`
            }
            to={"/contact"}
          >
            {t("about")}
          </NavLink>

          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            name=""
            id=""
            className="text-[16px] shadow-md rounded-2xl px-2 outline-0 cursor-pointer"
          >
            <option value="en">🇺🇸 Eng</option>
            <option value="ru">🇷🇺 Rus</option>
            <option value="uz">🇺🇿 Uzb</option>
          </select>
          <ShoppingCart size={22} />
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
