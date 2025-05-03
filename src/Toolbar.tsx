import { useState } from "react";
import { Button } from "react-bootstrap";

const toolbarItems = [
  { name: "Fruit", href: "/Fruit", id: 0},
  { name: "Vegetables", href: "Vegetables", id: 1},
];

type ToolbarChildProps = {
  setSelectedFoodId: (id: number) => void;
  selectedFoodId: number;
  updateToCategory: (idToUpdate: number, newCategory: string) => void;
};

export default function Toolbar({
  setSelectedFoodId,
  selectedFoodId,
  updateToCategory,
}: ToolbarChildProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMealClick = (id: number) => {
    setSelectedFoodId(id);
  };

  return (
      <div>
        {isExpanded ? (
          <div className="border-end bg-light p-3 d-flex flex-column">
            {toolbarItems.map((s) =>
              (s.name === "Fruit" || s.name === "Vegetables") ? null : (
                <a
                  key={s.name}
                  href={s.href}
                  data-is-selected={s.id === selectedFoodId}
                  onClick={() => handleMealClick(s.id)}
                  className="toolbar-link"
                >
                  {s.name}
                </a>
              )
            )}
    
            {/* Add category update buttons here */}
            <div className="mt-3 d-flex gap-2">
              <Button
                className="btn btn-outline-success"
                onClick={() => updateToCategory(selectedFoodId, "Fruit")}
              >
                Set as Fruit
              </Button>
              <Button
                className="btn btn-outline-primary"
                onClick={() => updateToCategory(selectedFoodId, "Vegetables")}
              >
                Set as Vegetable
              </Button>
            </div>
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

  