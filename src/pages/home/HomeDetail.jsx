import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../../components/ui/Skeleton";

const HomeDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`users/${id}`);
  const navigate = useNavigate();

  if (loading) return <Skeleton count={12} />;

  return (
    <div className="bg-white p-6 rounded-lg max-w-[900px] h-[500px] cursor-pointer flex items-center mx-auto">
      <div className="ml-[40px]">
        <img
          src={data.image}
          alt={data.title}
          className="w-[400px] object-contain mb-4 rounded-lg"
        />
      </div>
      <div className="ml-[40px]">
        <strong className="text-[#944aff] text-xl">{data.firstName}</strong>
        <p className="text-sm mt-2 max-w-[400px]">{data.email}</p>
        <p className="mt-2 text-lg font-bold">{data.password} </p>
        <p className="font-bold pt-[10px] text-amber-500">⭐ {data.rating}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default HomeDetail;
