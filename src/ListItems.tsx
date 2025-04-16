
type Item = {
  name: string;
};


//HERE IS MY PROP
type itemListProps = {
  items: Item[];
};


export function ListItems({ items }: itemListProps) {
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

