
type Item = {
  name: string;
  
};


//HERE IS MY FOOD ID PROP
type FoodIdProps = {
  items: Item[];
  FoodId: number;
  isSelected?: boolean;
  onClick?: () => void;
  isExpanded?: boolean;
  setIsExpanded?: (expanded: boolean) => void;
  setSelectedFoodId?: (id: number) => void;
  href?: string;
  onFoodIdSelected?: (id: number) => void;
};


export function ListItems({ items }: FoodIdProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Complete List:</th>
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
  );
}

