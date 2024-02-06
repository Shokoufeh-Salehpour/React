import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const theme = useSelector((state) => state.theme);
  const [counter, setCounter] = useState(15);
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
  }, []);
  if (counter < 1) {
    navigate("/");
  }
  return (
    <div
      style={{
        border: "1px solid",
        padding: "20px",
        flexBasis: "100%",
        borderColor: theme.borderColor,
      }}
    >
      <h1 style={{ marginTop: "0" }}>Page Not Found</h1>
      <br />
      <p style={{}}>
        you will take into homepage after <b>{counter}</b> seconds
      </p>
    </div>
  );
}

export default NotFound;
