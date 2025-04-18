
import { useState } from 'react';

type Item = {
  name: string;
  
};


//HERE IS MY FOOD ID PROP
type FoodIdProps = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  selectedFoodId: number;
  FoodId: number;
  isSelected?: boolean;
  onClick?: () => void;
  isExpanded?: boolean;
  setIsExpanded?: (expanded: boolean) => void;
  setSelectedFoodId?: (id: number) => void;
  href?: string;
  onFoodIdSelected?: (id: number) => void;
  text?: string;

};

export function ListItems({ items: initialItems }: FoodIdProps) {
  const [items, setItems] = useState<Item[]>(initialItems);

  const handleAddItem = () => {
    const newItem = { name: `Item ${items.length + 1}` }; // You can customize how new items are created
    setItems([...items, newItem]);
  };

  const handleDeleteItem = () => {
    setItems(items.slice(0, -1)); // Removes the last item from the list
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleDeleteItem}>Delete Item</button>
    </div>
  );
}


// type Item = {
//   name: string;
// };

// type ListItemsProps = {
//   items: Item[];
//   onDelete: (name: string) => void;
// };

// export function ListItems({ items, onDelete }: ListItemsProps) {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Grocery List:</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.name}>
//               <td>{item.name}</td>
//               <td>
//                 <button onClick={() => onDelete(item.name)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }