export default function Footer ({items}) {

    if(items.length === 0) return <footer className="stats bg-[#bc6c25] text-white text-center py-12 text-2xl font-bold">
    Ada 0 barang di daftar belanjaan
  </footer>

    const totalitems = items.length;
    const checkedItems = items.filter((item) => item.checked).length;
    const precentage = Math.round((checkedItems / totalitems) * 100);




    return(
        <footer className="stats bg-[#bc6c25] text-white text-center py-12 text-2xl font-bold">
            Ada {totalitems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({precentage}%)
          </footer>
    )
}