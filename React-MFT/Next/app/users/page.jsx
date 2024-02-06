"use client";
import PageCount from "@/comp/PageCount";
import Pagination from "@/comp/Pagination";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserDetail from "./[userName]/page";

export default function Users() {
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
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Pagination onChange={setPage} page={page} />
        <PageCount
          setUserPerPage={handleChangeUserPerPage}
          userPerPage={userPerPage}
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {users.map((user, index) => (
          <Link
            href={`users/${user.login}`}
            key={index}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Image
              src={user.avatar_url}
              alt={user.login}
              width={150}
              height={150}
            />
            <span>{user.login}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
