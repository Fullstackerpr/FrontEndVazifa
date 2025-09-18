import { memo, useEffect, useState } from "react";
import list from '../../../shared/assets/text.png'

const Pending = () => {

  const [time, setTime] = useState(60 * 60 * 24)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formTime = (sec: number) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0")
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0")
    const s = String(Math.floor(sec % 60)).padStart(2, "0")

    return `${h}:${m}:${s}`
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img
        src={list}
        alt="document"
        className="w-24 h-24 mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">
        Siz barcha ma’lumotlarni topshirdingiz
      </h2>

      <p className="text-gray-600 max-w-xs mb-6">
        Hujjatlar va ma’lumotlarni tekshiramiz va sizga imkon qadar tezroq
        javob beramiz.
      </p>

      <div className="text-4xl font-bold text-gray-800 mb-8">{formTime(time)}</div>

      <p className="text-sm text-gray-500">Savollaringiz bormi?</p>
      <a
        href="#"
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        Operator bilan bog‘lanish
      </a>
    </div>
  );
};

export default memo(Pending);
