import { memo, useEffect, useState, type FormEvent } from "react";
import { useUser } from "../lib/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { addUser, updateUser, getUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const editId = location.state?.id;

  useEffect(() => {
    if (editId) {
      const user = getUser(editId);
      if (user) {
        setUsername(user.username);
        setPassword(user.password);
      }
    }
  }, [editId, getUser]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editId) {
      updateUser({ id: editId, username, password });
    } else {
      const user = { id: Date.now(), username, password };
      addUser(user);
    }
    navigate("/view");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <div className="flex justify-between w-full rounded-lg border border-gray-300 px-4 py-2">
            <input
              required
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-0"
            />
            <div
              className="cursor-pointer text-gray-700"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <Eye color="gray" size={20} />
              ) : (
                <EyeOff color="gray" size={20} />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(Login);
