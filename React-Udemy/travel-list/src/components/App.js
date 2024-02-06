import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  function handleCheckItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }
  function handleDeleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }
  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }
  function handleDeleteAll() {
    const confirmed = window.confirm("do you want to delete all items?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleCheckItem={handleCheckItem}
        handleDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}
