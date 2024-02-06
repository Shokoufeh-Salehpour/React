import Image from "next/image";
import axios from "axios";

async function UserDetail({ params }) {
  const userName = params.userName;
  const response = await axios.get("https://api.github.com/users/" + userName);
  const userInfo = response.data;

  return (
    <>
      <h3>userdetails for user name: ({userName})</h3>
      <div>
        <Image
          src={userInfo.avatar_url}
          width={200}
          height={200}
          alt={userInfo.name}
        />
        <div>
          {" "}
          <b>id:</b>&nbsp;
          {userInfo.id}
        </div>

        <div>
          {" "}
          <b>type:</b>&nbsp;
          {userInfo.type}
        </div>
        <div>
          {" "}
          <b>blog:</b>&nbsp;
          {userInfo.blog}
        </div>
      </div>
    </>
  );
}

export default UserDetail;
