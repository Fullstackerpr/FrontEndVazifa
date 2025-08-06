import React, { useCallback, useEffect, useState } from "react";
import UserCreate from "./UserCreate";
import UserView from "./UserView";
import type { IStudents } from "../static";

const User = () => {
  const [data, setData] = useState<IStudents[]>(
    JSON.parse(localStorage.getItem("data") || "[]") || []
  );
  const [editing, setEditing] = useState<null | IStudents>(null)

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleDelete = useCallback((id: number) => {
    setData(prev => prev.filter((item) => item.id !== id))
  }, [setData])

  return (
    <div>
      <UserCreate setData={setData} editing={editing} setEditing={setEditing}/>
      <UserView data={data} onDelete={handleDelete} setEditing={setEditing}/>
    </div>
  );
};

export default React.memo(User);
