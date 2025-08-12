import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import RecipesView from "../../components/recipeView/RecipesView";
import type { IResponse } from "../../types";

const Home = () => {
  const { data } = useFetch<IResponse>("/recipes", { limit: 15, skip: 0 });

  return (
    <div className="container">
      <div className="mt-[80px]">
        <h1 className="text-2xl font-bold">Recipes</h1>
        <RecipesView data={data?.recipes} />
      </div>
    </div>
  );
};

export default memo(Home);
