import { memo } from "react";
import RecipesView from "../../components/recipeView/RecipesView";
import { useFetch } from "../../hooks/useFetch";
import type { IResponse } from "../../types";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const limit = 10;
  const [params, setParams] = useSearchParams();

  const skip = Number(params.get("skip")) || 1;

  const tag = params.get("tag") || "";

  const { data, loading } = useFetch<IResponse>(
    `/recipes/${tag ? `tag/${tag}` : ""}`,
    {
      limit,
      skip: (skip - 1) * limit,
    }
  );

  const { data: tags } = useFetch<string[]>("/recipes/tags");

  const handleTag = (item: string) => {
    params.set("tag", item);
    params.delete("skip");
    setParams(params);
  };

  const handlePaginate = (index: number) => {
    if (index === 0) {
      params.delete("skip");
    } else {
      params.set("skip", (index + 1).toString());
    }
    setParams(params);
  };


  const inc = () => {
    params.set("skip", (skip + 1).toString())
    setParams(params)
  }

  const dec = () => {
    params.set("skip", (skip - 1).toString())
    setParams(params)
  }

  return (
    <div className="container">
      <div className="flex gap-3 mt-12 py-2 overflow-x-auto whitespace-nowrap">
        <div className="bg-blue-600 h-[35px] text-white py-1 px-6 font-bold rounded-lg select-none">
          All
        </div>
        {tags?.map((item: string, index: number) => (
          <div
            key={index}
            className={`${
              tag === item ? "bg-blue-700 text-white border-0" : "bg-gray-200"
            } h-[35px] px-6 py-1 font-bold rounded-lg select-none cursor-pointer`}
            onClick={() => handleTag(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-[80px]">
        <h1 className="text-2xl font-bold">Market</h1>
        <RecipesView data={data?.recipes} />
      </div>
      {loading && <p className="text-center">Loading...</p>}
      <div className="text-center my-8">
        <button disabled={skip <= 1} onClick={() => dec()} className="px-4 py-2 rounded-[10px] border border-gray-400 text-gray-800 ">
          &#10094;
        </button>
        {Array(Math.ceil((data?.total || 0) / limit))
          .fill("")
          .map((_, index: number) => (
            <button
              key={index}
              onClick={() => handlePaginate(index)}
              className={`${
                skip === index + 1 ? "bg-blue-700 text-white border-0" : ""
              } px-4 py-2 rounded-[10px] border border-gray-400 ml-1 cursor-pointer`}
            >
              {index + 1}
            </button>
          ))}
        <button disabled={skip >= 5} onClick={() => inc()} className="text-gray-800 px-4 py-2 rounded-[10px] border border-gray-400 ml-1">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default memo(Shop);
