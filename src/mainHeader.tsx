
// import ToolbarButton from './ToolbarButton';
// import addIcon from './assets/plus-solid.svg';
// import removeIcon from './assets/minus-solid.svg';


export default function MainHeader() {
  return (
    <header className="d-flex align-items-center justify-content-between mb-3">
      <h2 className="me-3 mb-0">Grocery List</h2>
      <div>
        {/* <ToolbarButton icon={addIcon} onClick={() => alert('Add item')} />
        <ToolbarButton icon={removeIcon} onClick={() => alert('Remove item')} /> */}
      </div>
    </header>
  );
}