function PageCount({ userPerPage, setUserPerPage }) {
  return (
    <div>
      <label htmlFor="userCount">Users per Page:</label>
      <select
        style={{
          fontWeight: "600",
          width: "50px",
          borderRadius: "4px",
          marginLeft: "4px",
        }}
        id="userCount"
        name="userCount"
        value={userPerPage}
        onChange={setUserPerPage()}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
}

export default PageCount;
