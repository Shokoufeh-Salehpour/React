import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const theme = useSelector((state) => state.theme);
  const liStyles = {
    padding: "10px",
    width: "70px",
    textAlign: "center",
    border: "1px solid",
    margin: "2px",
    borderColor: theme.borderColor,
  };
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        margin: 0,
      }}
    >
      <li style={liStyles}>
        <Link to={"/"}>Home</Link>
      </li>
      <li style={liStyles}>
        <Link to={"/about"}>About</Link>
      </li>
      <li style={liStyles}>
        <Link to={"/users"}>Users</Link>
      </li>
      <li style={liStyles}>
        <Link to={"/options"}>Options</Link>
      </li>
    </ul>
  );
}

export default Navbar;
