import { useState } from "react";
import Item from "./Item";


export default function GroceryList({items, onDeleteItem, onToggleItem, onClearItems}) {


    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    // if(sortBy === 'input') {
    //     sortedItems = items;
    // }

    // if(sortBy === 'name') {
    //     sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
    // }
    
    // if (sortBy === 'checked') {
    //     sortedItems = items.slice().sort((a, b) => a.checked - b.checked)
       
    // }


    switch (sortBy) {
        case 'name':
            sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'checked':
        sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
        break;

        default:
            sortedItems = items;
            break;

    }



    return(
        <>
            <div className="list bg-[url('img/paper-bg.jpg')] bg-repeat-y bg-[155%] text-[#fefae0] py-9 flex flex-col items-center gap-8 overflow-y-scroll">
            <ul className="list-none w-[80%] flex flex-col items-center mt-[-1rem]">
                {sortedItems.map((item) => (
              <Item item={item} 
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              />
                ))}
            </ul>
          </div>
          <div className="actions bg-[#606c38] w-full py-8 text-center">
            <select className="py-2 px-6 text-xl mr-3 bg-[#fefae0] font-inherit border-none rounded-full cursor-pointer"
            value={sortBy} onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="input">Urutkan berdasarkan urutan input</option>
              <option value="name">Urutkan berdasarkan nama barang</option>
              <option value="checked">Urutkan berdasarkan ceklis</option>
            </select>
            <button className="py-2 px-6 text-xl bg-[#283618] text-[#fefae0] font-bold rounded-full"
            onClick={onClearItems}
            >
              Bersihkan Daftar
            </button>
          </div>
        </>
    )
}