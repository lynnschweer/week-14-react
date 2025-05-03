import { GroceryItem } from "./Root";

type ListProps = {
  items: GroceryItem[];
  setItems: React.Dispatch<React.SetStateAction<GroceryItem[]>>;
  onClick: (nameToDelete: string) => void;
  setSelectedFoodId: (id: number) => void;
  selectedFoodId: number;
};

export function ListItems({ items, onClick }: ListProps) {
  

  function setSelectedFoodId(_id: number): void {
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

    </div>
  );
}

