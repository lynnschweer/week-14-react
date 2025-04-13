import MainHeader from "./mainHeader"
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
  <div className="d-flex flex-column vh-100">
    <div className="sidebar">
      <ul>
        {mappedTags}
      </ul>
      <Toolbar/>
    </div>
    <div className="content">
      <MainHeader/>
      <div className="info">
        <ListItems items={groceryItems} />
      </div>
    </div>
  </div>
</div>
)
}



