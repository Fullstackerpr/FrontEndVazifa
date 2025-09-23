import { memo } from "react";
import { useTranslation } from "react-i18next";

const Main = () => {

  const {t} = useTranslation("state")

  return (
    <div className="container flex items-center justify-between px-[165px] mt-[80px]">
      <div>
        <h1 className="font-medium text-[40px]">{t("repro")}</h1>
      </div>
      <div className="flex gap-[32px] text-[20px] font-medium">
        <div>
          <p className="px-4 py-1 text-white bg-[#376B44] rounded-[20px]">
            {t("fra")}
          </p>
        </div>
        <div>
          <p className="px-4 py-1 text-[#2C2D35] bg-[#D4E8D9] rounded-[20px]">
            {t("ger")}
          </p>
        </div>
        <div>
          <p className="px-4 py-1 text-[#2C2D35] bg-[#D4E8D9] rounded-[20px]">
            {t("eng")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Main);
