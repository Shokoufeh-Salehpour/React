import { useEffect, useState } from "react";
import PageCount from "../PageCount";
import Pagination from "../Pagination";
import UserCard from "../UserCard";
import { useSelector } from "react-redux";
function Users() {
  const theme = useSelector((state) => state.theme);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(10);

  const handleChangeUserPerPage = (e) => {
    setUserPerPage(Number(e.target.value));
  };

  useEffect(() => {
    fetch(
      "https://api.github.com/users?per_page=" +
        userPerPage +
        "&page=" +
        page +
        "&since=" +
        `${userPerPage * (page - 1) + 1}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, [page, userPerPage]);
  return (
    <div
      style={{
        border: "1px solid",
        padding: "20px",
        flexBasis: "100%",
        borderColor: theme.borderColor,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Pagination page={page} onChange={(page) => setPage(page + 1)} />
        <PageCount
          userPerPage={userPerPage}
          setUserPerPage={() => handleChangeUserPerPage}
        />
      </div>
      <div
        style={{
          padding: 20,
          fontSize: 20,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {users.map((userInfo, index) => (
          <UserCard userInfo={userInfo} key={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default Users;
