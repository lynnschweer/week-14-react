import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function RecipesPage() {
  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetch("http://localhost:3000/GroceryItem")
      const data = await response.json()
      console.log(data)
    }
    asyncFunction()
    //the above code is a function that fetches data from the server
    //it uses the fetch API to make a GET request to the server
  }, [])
    return (
        <>
        <div className="container mt-3">
          <ul className="nav bg-light mb-3 border-bottom">
            <li className="nav-item">
              <Link to="/" className="nav-link">Grocery List</Link>
            </li>
            <li className="nav-item">
              <Link to="/NutritionPage" className="nav-link">Nutrition</Link>
            </li>
          </ul>
          <Outlet />
          <h1>Recipes</h1><></>
          <p>Explore healthy and easy dishes you can create from the items you already have in your pantry</p>
        </div>
      </>
    )
}