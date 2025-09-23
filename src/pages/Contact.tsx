import { memo } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {

  const {t} = useTranslation("contact")
  
  return (
    <section className="bg-white py-34" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          {t("about")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              {t("contact")}
            </h3>
            <p className="text-gray-600 mb-2">📍 {t("region")}</p>
            <p className="text-gray-600 mb-2">📞 +998 90 123 45 67</p>
            <p className="text-gray-600 mb-2">✉️ info@example.com</p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder={t("name")}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder={t("message")}
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
