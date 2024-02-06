import { Link } from "react-router-dom";

export default function UserCard({ userInfo }) {
  return (
    <Link
      to={"/users/" + userInfo.login}
      key={userInfo.id}
      style={{ margin: 10, display: "flex", flexDirection: "column" }}
    >
      <img
        src={userInfo.avatar_url}
        alt={userInfo.login}
        width={150}
        height={150}
      />
      <span>{userInfo.login}</span>
    </Link>
  );
}
