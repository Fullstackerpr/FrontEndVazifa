import { memo } from "react";
import { DATA } from "../types/data";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Section from "../components/Section";

const Home = () => {
  const { t } = useTranslation("button");

  return (
    <div>
      <Hero />
      <br />
      <br />
      <Main/>
      <div className="container mt-[30px]">
        <div className="grid grid-cols-3">
          {DATA?.map((data, inx) => (
            <div
              key={inx}
              className="w-[350px] mt-[30px] bg-[#E1EDE6] py-[20px] px-[20px] shadow-xl"
            >
              <div>
                <img src={data.img} alt="" className="w-[310px] h-[422px]" />
              </div>
              <div className="mt-[20px] font-medium">
                <h4 className="text-[#86928B] text-[18px] ">{data.author}</h4>
                <h2 className="font-medium text-[30px] text-[#2C2D35]">
                  {data.name}
                </h2>
                <p className="text-[18px] text-[#2C2D35] pb-[30px]">
                  {data.makefile}
                </p>
                <strong className="text-[24px] text-[#598D66]">
                  {data.price} <span>{t("val")}</span>
                </strong>
                <button className="w-full py-[21px] mt-[20px] border border-[#598D66] text-[20px] text-[#598D66]">
                  {t("main_b")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Section/>
    </div>
  );
};

export default memo(Home);
