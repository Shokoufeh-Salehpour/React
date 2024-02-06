export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>start adding items to your packingList 🚀</em>
      </p>
    );
  }
  const itemsNum = items.length;
  const packedItems = items.reduce(
    (acc, item) => (item.packed ? acc + 1 : acc),
    0
  );
  const packedPercentage = Math.round((packedItems / itemsNum) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "you have already packed all the items ✈"
          : `👜 You have ${itemsNum} item in your list. You already packed
        ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
