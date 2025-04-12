import Sidebar from "./sideBar"
import Toolbar from "./Toolbar"
import { ListItems } from "./ListItems"
import { groceryItems } from "./data"

const tags = [
"Breakfast",
"Lunch",
"Dinner",
]

//mapped tags means that we are mapping the tags to a list of li elements
const mappedTags = tags.map(tag => <li key={tag}>{tag}</li>);

export default function App() {
  return (
<div>
  <ul>
    {mappedTags}
  </ul>
  <div className="d-flex flex-column vh-100">
    <Toolbar/>
    <div className="d-flex flex-grow-1">
      <Sidebar/>
      <ListItems items={groceryItems} />
    </div>
  </div>
</div>
)
}


 
