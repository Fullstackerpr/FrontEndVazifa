import { memo } from "react";
import logoo from "../assets/logoo.svg";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const {t} = useTranslation("state")

  return (
    <div className="bg-[#E1EDE6] py-[23px]">
      <div className="container flex justify-between font-medium text-[#86928B] text-[18px]">
        <div>
          <img src={logoo} alt="" className="mb-[35px]"/>
          <p className="text-[#2C2D35]">+7 (999) 543-54-54</p>
          <p>{t("work")}</p>
        </div>

        <div>
          <h3 className="text-[20px] text-[#2C2D35] pb-1">{t("repro")}</h3>
          <p className="pb-1">{t("fra")}</p>
          <p className="pb-1">{t("ger")}</p>
          <p>{t("eng")}</p>
        </div>

        <div>
          <h3 className="text-[20px] text-[#2C2D35] pb-1">{t("news")}</h3>
          <p className="pb-1">2021</p>
          <p>2021</p>
        </div>

        <div>
          <h3 className="text-[20px] text-[#2C2D35] pb-1">{t("about")}</h3>
          <p className="pb-1">{t("art")}</p>
          <p>{t("man")}</p>
        </div>

        <div>
          <div className="flex gap-[30px] mb-2">
            <Facebook color="#2C2D35" />
            <Instagram color="#2C2D35" />
            <Youtube color="#2C2D35" />
          </div>
          <div className="text-[12px]">
            <p className="pb-1">Ink. House ®</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
