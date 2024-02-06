export default function UsersLayout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2>Users</h2>
      {children}
    </div>
  );
}
