// It has at least 3 React components
// It’s displaying the data
// It’s using at least 1 prop
// A user can create new items
// A user can delete items
// A user can update at least one property on the items

import MainHeader from "./mainHeader"
import { ListItems } from "./ListItems"
import { useState } from "react";
import Toolbar from "./Toolbar";

export type GroceryItem = {
  id: number;
  name: string;
  category: string;
};

export default function App() {
  const [selectedFoodId, setSelectedFoodId] = useState(0);

  const [newItemName, setNewItemName] = useState('');
const [newItemCategory, setNewItemCategory] = useState('');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!newItemName || !newItemCategory) return; // basic validation

  const newItem: GroceryItem = {
    id: items.length > 0 ? items[items.length - 1].id + 1 : 0,
    name: newItemName,
    category: newItemCategory
  };

  setItems([...items, newItem]);

  setNewItemName('');
  setNewItemCategory('');
};

  const initialItems: GroceryItem[] = [
    { id: 0, name: 'Apples', category: 'Fruit' },
    { id: 1, name: 'Bananas', category: 'Fruit' },
    { id: 2, name: 'Carrots', category: 'Vegetables' },
    {id: 3, name: 'Celery', category: 'Vegetables'},
    {id: 4, name: 'Blueberries', category: 'Fruit'},
    {id: 5, name: 'Spinach', category: 'Vegetables'}
  ];
  
  //react hook holds array of grocery items, always an array of grocery items
  const [items, setItems] = useState<GroceryItem[]>(initialItems);

  // const [unadded, added] = useState("")

  // useEffect(() => {
  //   document.title = 'items (${items.length})'
  // }, [items.length])

  const updateToCategory = (idToUpdate: number, newCategory: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === idToUpdate
          ? { ...item, category: newCategory }
          : item
      )
    );
  };

  const handleDeleteItem = (nameToDelete: string) => {
    setItems(items.filter((item) => item.name !== nameToDelete));
  };

  // const handleSubmit = () => {

  // }

  return (
/* <input>
onChange={() => added(event?.target.value)}
value={unadded}
</input> */

    <div className="d-flex flex-column vh-100">
      <MainHeader />

<form onSubmit={handleSubmit} className="p-3 d-flex gap-2 align-items-end">
  {/* form contents */}
</form>
      <div className="d-flex flex-column flex-grow-1">
        <Toolbar
          selectedFoodId={selectedFoodId}
          setSelectedFoodId={setSelectedFoodId}
          updateToCategory={updateToCategory}
        />
<form onSubmit={handleSubmit} className="p-3 d-flex gap-2 align-items-end">
  <div>
    <label className="form-label">Food Name</label>
    <input 
      type="text"
      className="form-control"
      value={newItemName}
      onChange={(e) => setNewItemName(e.target.value)}
      placeholder="e.g. Mango"
    />
  </div>
  <div>
    <label className="form-label">Category</label>
    <input 
      type="text"
      className="form-control"
      value={newItemCategory}
      onChange={(e) => setNewItemCategory(e.target.value)}
      placeholder="e.g. Fruit"
    />
  </div>
  <button type="submit" className="btn btn-success">Add Food</button>
</form>
<ListItems
  items={items}
  setItems={setItems}
  onClick={handleDeleteItem}
  setSelectedFoodId={setSelectedFoodId}
  selectedFoodId={selectedFoodId}
/>
      </div>
    </div>
  );
}

