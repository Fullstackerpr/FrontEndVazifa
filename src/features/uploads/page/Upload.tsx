import { memo, useState, type ChangeEvent, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUplaodFile } from "../service/useuploads";
import { UploadCloud } from "lucide-react";

const UplaodFile = () => {
  const { state } = useLocation();
  const [files, setFiles] = useState<any>({
    passport_file: null,
    diplom_file: null,
    yatt_file: null,
    sertifikat_file: null,
    tibiy_varaqa_file: null,
  });

  const { uploadFile } = useUplaodFile();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files, name } = e.target;
    if (files && files[0]) {
      setFiles((prev: any) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("doctor_id", state);
    formData.append("passport_file", files.passport_file);
    formData.append("diplom_file", files.diplom_file);
    formData.append("yatt_file", files.yatt_file);
    formData.append("sertifikat_file", files.sertifikat_file);
    formData.append("tibiy_varaqa_file", files.tibiy_varaqa_file);

    uploadFile.mutate(formData, {
      onSuccess: () => {
        navigate("/pending");
      },
    });
  };

  return (
    <div className="Statistic">
      <h2>Shaxsiy Ma'lumotlar</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center items-center w-[500px] mx-auto mt-6"
      >
        <div className="bg-[#F0F1F3] rounded-[16px] text-[#62626E] pl-4 py-3 w-full">
          <label>Passport fotosurat (oldi va orqa)</label>
          <div className="flex gap-2 items-center cursor-pointer mt-2">
            <UploadCloud color="#1067FF" />
            <input
              onChange={handleChange}
              type="file"
              name="passport_file"
              className="text-[#1067FF]"
            />
          </div>
        </div>

        <div className="bg-[#F0F1F3] rounded-[16px] text-[#62626E] pl-4 py-3 w-full">
          <label>Diplom (Bakalavr va mutaxassislik)</label>
          <div className="flex gap-2 items-center cursor-pointer mt-2">
            <UploadCloud color="#1067FF" />
            <input
              onChange={handleChange}
              type="file"
              name="diplom_file"
              className="text-[#1067FF]"
            />
          </div>
        </div>

        <div className="bg-[#F0F1F3] rounded-[16px] text-[#62626E] pl-4 py-3 w-full">
          <label>O'z o'zini band qilish</label>
          <div className="flex gap-2 items-center cursor-pointer mt-2">
            <UploadCloud color="#1067FF" />
            <input
              onChange={handleChange}
              type="file"
              name="yatt_file"
              className="text-[#1067FF]"
            />
          </div>
        </div>

        <div className="bg-[#F0F1F3] rounded-[16px] text-[#62626E] pl-4 py-3 w-full">
          <label>Sertifikat</label>
          <div className="flex gap-2 items-center cursor-pointer mt-2">
            <UploadCloud color="#1067FF" />
            <input
              onChange={handleChange}
              type="file"
              name="sertifikat_file"
              className="text-[#1067FF]"
            />
          </div>
        </div>

        <div className="bg-[#F0F1F3] rounded-[16px] text-[#62626E] pl-4 py-3 w-full">
          <label>Shaxsiy tibbiy varaqa</label>
          <div className="flex gap-2 items-center cursor-pointer mt-2">
            <UploadCloud color="#1067FF" />
            <input
              onChange={handleChange}
              type="file"
              name="tibiy_varaqa_file"
              className="text-[#1067FF]"
            />
          </div>
        </div>

        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 disabled:bg-gray-400 cursor-pointer">
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default memo(UplaodFile);
