import { useState } from "react";
import Header from "./components/elements/Header";
import Form from "./components/elements/form";
import GroceryList from "./components/elements/GroceryList";
import Footer from "./components/elements/Footer";

const groceryItems = [
    {
      id: 1,
      name: 'Kopi Bubuk',
      quantity: 2,
      checked: true,
    },
    {
      id: 2,
      name: 'Gula Pasir',
      quantity: 5,
      checked: false,
    },
    {
      id: 3,
      name: 'Air Mineral',
      quantity: 3,
      checked: false,
    },
  ];






export default function App() {

    const [items, setItems] = useState(groceryItems);


    function handleAddItem (item) {
        setItems([...items, item]);
    }

    function handleDeleteItem(id: number) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id: number) {
        setItems ((items) => items.map((item) => (item.id === id ? {...item, checked: !item.checked} : item))) 
    }

    function handleClearItems(){
        setItems([]);
    }





    return (
      <div className="container font-comfortaa text-[#283618] bg-[#fefae0] min-h-screen flex items-center justify-center">
        <div className="app w-[70%] h-full mx-auto grid grid-rows-[auto_auto_1fr_auto]">
         <Header/>
          <Form onAddItem={handleAddItem} />
          <GroceryList 
          items={items} 
          onDeleteItem={handleDeleteItem} 
          onToggleItem={handleToggleItem}
          onClearItems={handleClearItems}
          />
          <Footer items={items}/>
        </div>
      </div>
    );
  }
  
