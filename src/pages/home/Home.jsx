import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../../components/ui/Skeleton";
import ErrorWid from "../../components/ui/ErrorWid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, error, loading } = useFetch("users");
  const [visisbleCount, setVisibleCount] = useState(12);
  const navigate = useNavigate()

  const handleSee = () => {
    setVisibleCount((prev) => prev + 12);
  };

  if (loading) return <Skeleton count={12} />;

  return (
    <>
      {error && <ErrorWid />}

      <main>
        <div className="container my-12 mt-[150px]">
          <div className="grid grid-cols-3 gap-12">
            {console.log(data)}
            {data.users.slice(0, visisbleCount).map((user) => (
              <div
                key={user.id}
                onClick={() => navigate(`/user/${user.id}`)}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
              >
                <img
                  src={user.image}
                  alt={user.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4">
                  <strong className="text-[#944aff] text-xl">
                    {user.firstName}
                  </strong>
                  <p className="truncate pt-[10px] text-sm text-gray-600">
                    {user.email}
                  </p>
                  <p className="text-amber-500 pt-[5px] font-bold">
                    {user.password}
                  </p>
                  <button className="bg-[#7000ff] mt-[10px] text-white w-full h-8 rounded-[5px] cursor-pointer">
                    Batafsil
                  </button>
                </div>
              </div>
            ))}
          </div>
          {visisbleCount < data.users.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleSee}
                className="bg-[#7000ff] text-white py-2 px-6 rounded hover:bg-[#5e00d9] cursor-pointer"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
