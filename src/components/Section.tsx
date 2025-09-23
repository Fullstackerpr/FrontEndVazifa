import { memo } from "react";
import footer from "../assets/footer.png";
import star from "../assets/star.png";
import { useTranslation } from "react-i18next";

const Section = () => {

  const { t } = useTranslation("text");

  return (
    <div
      className="relative bg-cover bg-center text-white mt-[70px] h-[550px]"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div>
        <div className="container top-[70px]">
          <div className="w-[521px] flex items-center gap-[20px]">
            <img src={star} alt="" className="object-contain mt-[70px]" />
            <h2 className="text-[40px] font-medium mb-4 pt-[75px]">
              {t("title_s")}
            </h2>
          </div>
          <div className="w-[540px] text-[18px] font-medium">
            <p className="mb-4">
              {t("section")}
            </p>
            <p className="mb-10">
              {t("section2")}
            </p>
          </div>
          <button className="font-medium text-[20px] text-[#2C2D35] px-[60px] py-[21px] bg-[#EEDB6D]">
            {t("section_b")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Section);
