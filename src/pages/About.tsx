import { memo } from "react";
import news from "../assets/news.jpg"
import { useTranslation } from "react-i18next";

const About = () => {

  const {t} = useTranslation("news")

  return (
    <section className="bg-gray-50 py-20" id="about">
      <div className="container mx-auto flex items-center">
        <div className="w-full md:w-1/2">
          <img
            src={news}
            alt="Artists"
            className="h-[480px] rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            {t("text1")}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {t("new_text2")}
          </p>
          <button className="px-8 py-3 bg-[#598D66] outline-0 text-white cursor-pointer rounded-lg shadow hover:bg-[#4a7558] transition">
            {t("new_button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
