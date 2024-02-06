import { useSelector } from "react-redux";

function About() {
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
      <h1 style={{ marginTop: "0" }}>About Us</h1>
      <p>This is about page of admin panel.</p>
    </div>
  );
}

export default About;
