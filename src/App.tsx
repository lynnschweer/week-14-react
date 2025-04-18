//move test data in state
//implement create ability
//implement delete ability
//implement update ability


import MainHeader from "./mainHeader"
import { ListItems } from "./ListItems"
import { useState } from "react";
import Toolbar from "./Toolbar";




export default function App() {
  const [selectedFoodId, setSelectedFoodId] = useState(0);

  const initialItems = [{ name: 'Apples' }, { name: 'Bananas' }, { name: 'Carrots' }];

  const [items, setItems] = useState(initialItems);
  

  // const handleAddItem = () => {
  //   const newItem = { name: `Item ${items.length + 1}` };
  //   setItems([...items, newItem]);
  // };

  const handleDeleteItem = (nameToDelete: string) => {
    setItems(items.filter((item) => item.name !== nameToDelete));
  };


  // const selectedFood = groceryItems.find(item => item.id === selectedFoodId);
  return (
    <div className="d-flex flex-column vh-100">
      <MainHeader />

      {/* Main content area */}
      <div className="d-flex flex-column flex-grow-1">
        <Toolbar selectedFoodId={selectedFoodId} setSelectedFoodId={setSelectedFoodId} />
        <ListItems items={items} onClick={handleDeleteItem} />
      </div>
    </div>
  );
}