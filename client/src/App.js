import { useEffect , useState} from 'react';

function App() {
  const [amount,setAmount] = useState(0);
  const [convert,setConvert] = useState(false);
  const [currencies,setcurrencies] = useState([]);
  const [to,setTo] = useState(currencies[0]);
  const[from,setFrom] = useState(currencies[1]);
  const [query,setQuery] = useState({from:'huf',
                                     to:'eur',
                                     amount:0});
 
  
  
  useEffect(
    ()=>{
      fetch('/convert?' + new URLSearchParams(Object.entries(query)) )
      .then(res=>res.json())
      .then(data=>console.log(data))
    },[convert]
  );

  

  useEffect(
    ()=>{
      fetch('/symbols')
      .then(res=>res.json())
      .then(data=>setcurrencies(data))
    },[]
  );


  function handleChangeAmount(e){
    setAmount(e.target.value);
  }
  function handleChangeFrom(e){
    setFrom(e.target.value);
  }
  function handleChangeTo(e){
    setTo(e.target.value);
  }
  function handleCurrencyChange(e){
    e.preventDefault();
    setQuery( {from:  `${from}`,
               to:    `${to}`,
               amount:`${amount}`});
    setConvert(prev=>!prev);
    console.log(query);
  }
  
  const currenciesToSelect = currencies.map(item=>{
    return <option>{item}</option>
  })

  return (
    <div>
      <h1>Online valutaváltó</h1>

      <form onSubmit={handleCurrencyChange}>
        <label>Amount</label>
        <input 
          type='number' 
          step='1000'
          value={amount}
          onChange={handleChangeAmount}
        />

        <label>from this currency</label>
        <select value={from} onChange={handleChangeFrom}>
          {currenciesToSelect}
        </select>

        <label>to this currency</label>
        <select value={to} onChange={handleChangeTo}>
          {currenciesToSelect}
        </select>
        <button>GO</button>
      </form>

      <p>x money = y another money</p>

    </div>
  );
}

export default App;
