import { GroceryItem } from "./App";

type ListProps = {
  items: GroceryItem[];
  setItems: React.Dispatch<React.SetStateAction<GroceryItem[]>>;
  onClick: (nameToDelete: string) => void;
  setSelectedFoodId: (id: number) => void;
  selectedFoodId: number;
};

export function ListItems({ items, setItems, onClick }: ListProps) {
  const handleAddItem = () => {
    const newItem: GroceryItem = {
      id: items.length > 0 ? items[items.length - 1].id + 1 : 0,
      name: `Item ${items.length + 1}`,
      category: ""
    };
    setItems([...items, newItem]);
  };

  function setSelectedFoodId(id: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="p-3">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
  {items.map((item) => (
    <tr 
      key={item.id} 
      onClick={() => setSelectedFoodId(item.id)} 
      style={{ cursor: "pointer" }}
    >
      <td>{item.name}</td>
      <td>{item.category || "None"}</td>
      <td>
        <button 
          onClick={(e) => { 
            e.stopPropagation(); // prevent row click when deleting
            onClick(item.name); 
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

      </table>

      <button onClick={handleAddItem} className="btn btn-primary">
        Add Item
      </button>
    </div>
  );
}

