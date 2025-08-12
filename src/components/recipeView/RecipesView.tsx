import { memo, type FC } from "react";
import type { IRecipes } from "../../types";
import { useNavigate } from "react-router-dom";

interface Props {
  data: IRecipes[] | undefined;
}

const RecipesView: FC<Props> = ({ data }) => {
  
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-3">
        {data?.map((recipe: IRecipes) => (
          <div
            key={recipe.id}
            className="border border-gray-300 rounded-[5px] flex flex-col items-center py-1 mt-5"
          >
            <div className="">
              <div className="flex justify-center">
                <img
                  src={recipe.image}
                  alt=""
                  width={220}
                  className="rounded-2xl"
                  onClick={() => navigate(`/recipe/${recipe.id}`)}
                />
              </div>
              <div className="flex flex-col w-full px-2">
                <h3
                  className="line-clamp-1 pt-1 font-bold text-gray-800"
                  title={recipe.name}
                >
                  {recipe.name}
                </h3>
                <h3 className="font-serif font-bold text-[18px] text-orange-950">
                  {recipe.cuisine}
                </h3>
                <p className="line-clamp-1">{recipe.tags}</p>
                <strong>
                  <span className="text-yellow-400 text-2xl">&#9733;</span>
                  {recipe.rating}
                </strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(RecipesView);
