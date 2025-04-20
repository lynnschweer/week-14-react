//move test data in state
//implement create ability
//implement delete ability
//implement update ability


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

  const initialItems: GroceryItem[] = [
    { id: 0, name: 'Apples', category: 'Fruit' },
    { id: 1, name: 'Bananas', category: 'Fruit' },
    { id: 2, name: 'Carrots', category: 'Vegetables' },
    {id: 3, name: 'Celery', category: 'Vegetables'},
    {id: 4, name: 'Blueberries', category: 'Fruit'},
    {id: 5, name: 'Spinach', category: 'Vegetables'}
  ];
      
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
      <div className="d-flex flex-column flex-grow-1">
        <Toolbar
          selectedFoodId={selectedFoodId}
          setSelectedFoodId={setSelectedFoodId}
          updateToCategory={updateToCategory}
        />

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

