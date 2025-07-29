import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "../../components/ui/Skeleton";
import ErrorWid from "../../components/ui/ErrorWid";
import Popup from "../../components/ui/Popup";

const User = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Skeleton count={12} />;

  return (
    <>
      {error && <ErrorWid />}

      <div
        id="user"
        className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mt-[50px]"
      >
        {data.map((user) => (
          <div
            onClick={() => setSelectedUser(user)}
            key={user.id}
            className="w-[400px] cursor-pointer shadow-lg rounded-xl overflow-hidden p-4 bg-white hover:shadow-2xl transition"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`}
              alt="User"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <div className="text-center">
              <h2 className="font-semibold text-lg">
                {user.name.firstname} {user.name.lastname}
              </h2>
              <p className="text-[16px] text-blue-700 py-[10px]">{user.email}</p>
              <p className="text-sm text-gray-600">{user.phone}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedUser && (
        <Popup isShow={true} onclose={() => setSelectedUser(null)}>
          <div className="p-4 text-center w-[300px] h-84 bg-amber-300 rounded-2xl">
            <img
              src={`https://i.pravatar.cc/150?img=${selectedUser.id}`}
              alt="User"
              className="w-28 h-28 rounded-full mx-auto mt-4"
            />
            <h3 className="text-xl font-bold pt-[10px]">
              {selectedUser.name.firstname} {selectedUser.name.lastname}
            </h3>
            <p className="text-sm text-gray-700 mb-1 pt-[5px]">
              📧 {selectedUser.email}
            </p>
            <p className="text-sm text-gray-700 mb-1 pt-[5px]">
              📞 {selectedUser.phone}
            </p>
            <p className="text-sm text-gray-700 pt-[5px]">
              📍 {selectedUser.address.city}, {selectedUser.address.street}
            </p>
          </div>
        </Popup>
      )}
    </>
  );
};

export default User;
