import { useState } from "react";

export default function Form({onAddItem}) {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault()

        if (!name) return;

        const newItem = {
             name,
            quantity,
            checked: false,
            id: Date.now()
        }


        onAddItem(newItem);


        console.log(newItem);
        setName('');
        setQuantity(1)
        
        
    }


    const quantityNum = [...Array(20)].map((_, i)=>(
        <option key={i + 1} value={i + 1}>{i + 1}</option>
    ))

    return(
        <form onSubmit={handleSubmit} className="add-form bg-[#dda15e] py-12 flex flex-col items-center justify-center gap-3">
            <h3 className="mr-8 text-3xl">Hari ini belanja apa kita?</h3>
            <div className="my-4 flex">
              <select className="mr-4 bg-[#fefae0] font-inherit border-none rounded-full py-3 px-8 text-2xl cursor-pointer"
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))} 
              >
                {quantityNum}
              </select>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="nama barang..."
                className="bg-[#fefae0] font-inherit border-none rounded-full py-3 px-8 text-2xl"
              />
            </div>
            <button className="bg-[#283618] text-[#fefae0] font-bold rounded-full py-3 px-8 text-2xl">
              Tambah
            </button>
          </form>
    )
}
