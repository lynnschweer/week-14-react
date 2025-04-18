import { useState } from "react";
import { Button } from "react-bootstrap";


//PARENT
const Toolbar = [
  { name: "Fruit", href: "/Fruit", id:0, text:"beginning" },
  { name: "Vegetables", href: "Vegetables",id:1,text: "middle" }, 

];

type ToolbarChildProps = {
  setSelectedFoodId: (id: number) => void;
  selectedFoodId: number;
};

//CHILD
export default function ToolbarChild({setSelectedFoodId, selectedFoodId}: ToolbarChildProps) {
  const [isExpanded, setIsExpanded] = useState(true);

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
  