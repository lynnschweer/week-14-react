import ToolbarButton from './ToolbarButton';
import addIcon from './assets/plus-solid.svg';
import removeIcon from './assets/minus-solid.svg';


export default function Toolbar() {
    return (
    <div className="bg-light p-3 border-bottom">
        <ToolbarButton icon={addIcon} onClick={() => alert('Add item')} />
        <ToolbarButton icon={removeIcon} onClick={() => alert('Remove item')} />
            </div>
            )
}
