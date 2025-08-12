import { memo } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import type { IRecipes } from "../../types";

const RecipesDetail = () => {
  const { id } = useParams();
  const { data } = useFetch<IRecipes>(`/recipes/${id}`);

  return (
    <div className="container">
      <h2 className="mt-16 text-2xl font-bold text-amber-900 mask-t-from-neutral-400">
        RecipesDetail
      </h2>
      <div className="mt-8 flex gap-12">
        <div>
          <img src={data?.image} alt="" className="w-[400px] rounded-2xl" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mask-radial-from-neutral-950">
            {data?.name}
          </h3>
          <p className="pt-2 text-[18px] text-emerald-900">{data?.tags}</p>
          <p className="font-bold text-amber-600">{data?.cuisine}</p>
          <p className="w-[500px] pt-2 line-clamp-6 text-[16px] text-gray-600">
            {data?.instructions}
          </p>
          <strong className="text-amber-800">
            <span className="text-yellow-400 text-2xl">&#9733;</span>{" "}
            <span className="text-yellow-400 text-2xl mr-2">&#9733;</span>
            <span className="text-yellow-400 text-2xl mr-2">&#9733;</span>
            {data?.rating}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default memo(RecipesDetail);
