// export default function ListItems() {
//   let slideHeight = 400
//     return (
//     <div className="flex-grow-1 d-flex flex-column">
//       <div className="d-flex flex-grow-1 justify-content-center align-items-center h-100">
//         <div className="bg-white m-3 w-75 shadow-sm p-3 border" style={{height: slideHeight + "px"}}>You need the following:</div>
//     </div>
//     </div>
//     )
//   }

type Item = {
  name: string;
};

type itemListProps = {
  items: Item[];
};


export function ListItems({ items }: itemListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Food</th>
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