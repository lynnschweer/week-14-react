import MainHeader from "./mainHeader"
import Toolbar from "./Toolbar"
import { ListItems } from "./ListItems"
import { groceryItems } from "./data"



export default function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <MainHeader />

      {/* Main content area */}
      <div className="d-flex flex-column flex-grow-1">
        <Toolbar />
        <ListItems items={groceryItems} />
      </div>
    </div>
  );
}