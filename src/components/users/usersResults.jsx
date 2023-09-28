import { useContext } from "react";
import Spinner from "../pages/assets/Spinner";
import UserItem from "./userItem";
import GithubContext from "../context/github/githubContext";

function UsersResult() {
  const { data, isLoading } = useContext(GithubContext);

  return !isLoading ? (
    <>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {data.map((user) => (
          <UserItem key={user.id} login={user.login} avatar={user.avatar_url} />
        ))}
      </div>
    </>
  ) : (
    <Spinner />
  );
}

export default UsersResult;
