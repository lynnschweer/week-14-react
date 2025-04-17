//move test data in state
//implement create ability
//implement delete ability
//implement update ability


import MainHeader from "./mainHeader"
import { ListItems } from "./ListItems"
import { groceryItems } from "./data"
import { useState } from "react";
import Toolbar from "./Toolbar";
import ToolbarChild from "./Toolbar";

export default function App() {
  const [selectedFoodId, setSelectedFoodId] = useState(0);

  const addFoodItem = ()=> {}

  // const selectedFood = groceryItems.find(item => item.id === selectedFoodId);
  return (
    <div className="d-flex flex-column vh-100">
      <MainHeader />

      {/* Main content area */}
      <div className="d-flex flex-column flex-grow-1">
        <Toolbar selectedFoodId={selectedFoodId} setSelectedFoodId={setSelectedFoodId} />
        <ListItems items={groceryItems} FoodId={1} />
        <ToolbarChild selectedFoodId={selectedFoodId} setSelectedFoodId={setSelectedFoodId} />
      </div>
    </div>
  );
}