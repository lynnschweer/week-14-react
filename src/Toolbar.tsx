import { useState } from "react";
import { Button } from "react-bootstrap";


//PARENT
const Toolbar = [
  { name: "Breakfast", href: "/breakfast", id:0 },
  { name: "Lunch", href: "/lunch",id:1 },
  { name: "Dinner", href: "/dinner",id:2 },
];


//CHILD
export default function ToolbarChild() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedFoodId, setSelectedFoodId] = useState(0);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMealClick = (id: number) => {
    setSelectedFoodId(id);
  }
  return (
    <div>
      {isExpanded ? (
        <div className="border-end bg-light p-3 d-flex flex-column">
          {Toolbar.map((s) => (
            <a
              key={s.name}
              href={s.href}
              data-is-selected={s.id === selectedFoodId}
              //the id is used to determine which item is selected
              onClick={() => handleMealClick(s.id)}
              className="toolbar-link"
            >
              {s.name}
            </a>
          ))}
        </div>
      ) : null}
      <Button
        className="btn btn-outline-secondary me-2"
        onClick={handleButtonClick}
      >
        {isExpanded ? "Collapse" : "Expand"}
      </Button>
    </div>
  );
}
    


/* // //DROPDOWN COMPONENET
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Breakfast</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Lunch</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Dinner</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// } */

