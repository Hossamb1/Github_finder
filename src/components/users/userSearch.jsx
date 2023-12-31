import React, { useContext, useState } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";
import { searchUsers } from "../context/github/githubActions";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { data, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Type Something");
    } else {
      dispatch({ type: "SET_LOADING" });
      const user = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: user });
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-col-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {data.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearSearch}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
