// Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
// Contain at least 10 custom components
// Allow for all CRUD operations via one or more APIs

import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MainHeader from './mainHeader'; // assume these exist
import Toolbar from './Toolbar';
import { ListItems } from './ListItems';

export type GroceryItem = {
  id: number;
  name: string;
  category: string;
};

export default function App() {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [selectedFoodId, setSelectedFoodId] = useState(0);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('');

  //READ
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:3000/GroceryItem");
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  }, []);

  //CREATE
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemCategory) return;

    const newItem: Omit<GroceryItem, "id"> = {
      name: newItemName,
      category: newItemCategory,
    };

    const response = await fetch("http://localhost:3000/GroceryItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    const createdItem = await response.json();
    setItems([...items, createdItem]);

    setNewItemName('');
    setNewItemCategory('');
  };

  //UPDATE (category only)
  const updateToCategory = async (idToUpdate: number, newCategory: string) => {
    const updatedItem = items.find((item) => item.id === idToUpdate);
    if (!updatedItem) return;

    const response = await fetch(`http://localhost:3000/GroceryItem/${idToUpdate}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: newCategory }),
    });

    const updated = await response.json();
    setItems(items.map(item => item.id === idToUpdate ? updated : item));
  };

  //DELETE
  const handleDeleteItem = async (nameToDelete: string) => {
    const itemToDelete = items.find(item => item.name === nameToDelete);
    if (!itemToDelete) return;

    await fetch(`http://localhost:3000/GroceryItem/${itemToDelete.id}`, {
      method: "DELETE"
    });

    setItems(items.filter((item) => item.id !== itemToDelete.id));
  };

  return (
    <>
      <div className="container mt-3">
        <ul className="nav bg-light mb-3 border-bottom">
          <li className="nav-item">
            <Link to="/RecipesPage" className="nav-link">Recipes</Link>
          </li>
          <li className="nav-item">
            <Link to="/NutritionPage" className="nav-link">Nutrition</Link>
          </li>
        </ul>
        <Outlet />
      </div>

      <div className="d-flex flex-column vh-100">
        <MainHeader />

        {/* Form to Add Grocery Item */}
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
    </>
  );
}


