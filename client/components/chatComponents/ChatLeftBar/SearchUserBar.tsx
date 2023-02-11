import React, { useState } from "react";
import styles from "../../../styles/chat.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import UserListComponent from "./UserListComponent";

const SearchUserBar = () => {
  const [user, setUser] = useState<string>("");
  return (
    <div className={styles.chatSearch}>
      <div>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          name=""
          placeholder="search"
          id=""
        />
        <span>
          <SearchIcon />
        </span>
      </div>
      {user.length > 0 && <UserListComponent user={user} setUser={setUser} />}
    </div>
  );
};

export default SearchUserBar;
