import { memo } from "react";
import hero1 from "../assets/hero.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("translation, text");

  return (
    <div className="container flex gap-[30px]">
      <div className="mt-[20px]">
        <img src={hero1} alt="" />
      </div>
      <div className="w-[500px] mt-[145px]">
        <h1 className="font-medium text-[60px] text-[#2C2D35]">
          {t("title_her")} <span className="text-[#598d66]">Ink. House</span> 
        </h1>
        <p className="text-[18px] text-[#86928B] font-medium pb-[60px]">
          {t("hero")}
        </p>
        <button className="border border-[#598D66] text-[20px] text-[#598D66] font-medium px-[60px] py-[21px]">
          {t("hero_b")}
        </button>
      </div>
    </div>
  );
};

export default memo(Hero);
