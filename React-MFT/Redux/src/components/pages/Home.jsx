import { useSelector } from "react-redux";

function Home() {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      style={{
        border: "1px solid",
        padding: "20px",
        flexBasis: "100%",
        borderColor: theme.borderColor,
      }}
    >
      <h1 style={{ marginTop: "0" }}>Home</h1>
      <p>This is home page of admin panel.</p>
    </div>
  );
}

export default Home;
