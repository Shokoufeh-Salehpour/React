import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function UserDetail() {
  const theme = useSelector((state) => state.theme);
  const [user, setUser] = useState([]);
  const { myLogin } = useParams();
  useEffect(() => {
    fetch("https://api.github.com/users/" + myLogin)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [myLogin]);
  return (
 <div style={{ border: "1px solid", padding: "20px", flexBasis: "100%", borderColor: theme.borderColor,}}>
      <img src={user.avatar_url} alt={user.name} width={240} />
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          Name:&nbsp;<b>{user.name}</b>
        </li>
        <li>
          Username:&nbsp;<b>{user.login}</b>
        </li>
        <li>
          Location:&nbsp;<b>{user.location}</b>
        </li>
        <li>
          BIO:&nbsp;<b>{user.bio}</b>
        </li>
        <li>
          Profile URL:&nbsp;
          <a href={user.url}>{user.url}</a>
        </li>
      </ul>
   </div>
  );
}

export default UserDetail;
