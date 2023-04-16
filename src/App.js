import { useState, useEffect } from "react";



function App() {

  const [items,setItems] = useState([]);

  useEffect(()=>{
    fetch("/api/items")
    .then(res=>res.json())
    .then(data=>setItems(data));
  },[]);

  return (
   <div>
    <h1>Main</h1>
   </div>
  );
}

export default App;
