import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  handleDeleteItem,
  handleCheckItem,
  handleDeleteAll,
}) {
  const [order, setOrder] = useState("input");
  let sortedList;
  switch (order) {
    case "input":
      sortedList = items.slice();
      break;

    case "description":
      sortedList = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;

    case "packed":
      sortedList = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;

    default:
      break;
  }
  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleCheckItem={handleCheckItem}
          />
        ))}
      </ul>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value={"input"}>input</option>
        <option value={"description"}>description</option>
        <option value={"packed"}>packed</option>
      </select>
      <button onClick={handleDeleteAll}> empty List</button>
    </div>
  );
}
