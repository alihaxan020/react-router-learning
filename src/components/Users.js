import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <button
        className="bg-green-500 p-2 rounded-md text-white"
        onClick={() => setSearchParams({ filter: "active" })}
      >
        Showing Active Users
      </button>
      <button
        className="bg-yellow-500 p-2 rounded-md text-white ml-2"
        onClick={() => setSearchParams({})}
      >
        Reset Filter
      </button>

      <div>
        {showActiveUsers ? (
          <div>Showing active users</div>
        ) : (
          <div>Showing all users</div>
        )}
      </div>
    </div>
  );
};

export default Users;
