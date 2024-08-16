export default function Item({item, onDeleteItem, onToggleItem}) {
    return(
        <li key={item.id} className="text-[#283618] text-4xl font-bold flex items-center mb-12">
                <input
                  type="checkbox" 
                  className="h-12 w-12 accent-[#283618] mr-5"
                  checked={item.checked}
                  onChange={() => onToggleItem(item.id)}
                />
                <span className={item.checked ? "line-through" : ""}>{item.quantity} {item.name}</span>
                <button className="flex items-center justify-center cursor-pointer text-2xl p-0 w-12 h-12 bg-red-500 ml-4"
                onClick={() => onDeleteItem(item.id)}>
                  &times;
                </button>
              </li>
    )
}