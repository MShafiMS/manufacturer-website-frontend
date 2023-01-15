import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () => primaryAxios.get("/user"));
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="font-bold text-4xl text-secondary text-center my-4">
        Users
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th className="text-secondary">User Email</th>
              <th className="text-secondary">Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.data.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
