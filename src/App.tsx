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


//the below code is a function that handles the form submission
//it prevents the default form submission behavior
//and adds a new item to the list of items
//it also resets the input fields to empty strings
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!newItemName || !newItemCategory) return; // basic validation

  //the newItem is an object that has the same shape as the GroceryItem type
  //it has an id that is one greater than the last item's id

  const newItem: GroceryItem = {
    id: items.length > 0 ? items[items.length - 1].id + 1 : 0,
    name: newItemName,
    category: newItemCategory
  };

  // setItems is a function that updates the state of items
  //it takes a function that receives the previous state and returns the new state
  //the new state is an array of items that includes the previous items and the new item/spread operator
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

  return (

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
{/* form to add new grocery items */}
{/* one for food and one for category */}
  
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

      //e.target.value means whatever the user types in the input field
      //onChange is a prop that takes a function
      //that is called when the value of the input changes
    />
  </div>

  {/* //button to submit the form */}
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

