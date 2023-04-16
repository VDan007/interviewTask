import { useState, useEffect } from "react";



function App() {

  const [items,setItems] = useState([]);

  useEffect(()=>{
    fetch("/api/items")
    .then(res=>res.json())
    .then(data=>setItems(data));
  },[]);

  const itemsToRender = items.map(item=>{
    return <p>{item.name}</p>
  });

  return (
   <div>
    <h1>Main</h1>
    {itemsToRender}
   </div>
  );
}

export default App;
