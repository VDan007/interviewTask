import { useState,useEffect } from 'react';
import {currencies, currencies as penz}  from '../devDB'; ///////delet before shipping

console.log(currencies);

function App() {
  const [changeData,setChangeData] = useState({
    amount:0,
    from:'HUF',
    to:'EUR',
  });
  console.log(changeData);
  const [currencies,setCurrencies] = useState([]);
  const currenciesToChooseFrom = currencies.map(item=>{
    return <option key={item} value ={item}>{item}</option>
  });

  useEffect(
    ()=>{
        ///get currencies from db
        setCurrencies(penz);
    },[]
  );


  function amountHandleChange(e){
    setChangeData(prev=>{
      return {...prev,
              amount: e.target.value}
    })
  }
  function fromHandleChange(e){
    setChangeData(prev=>{
      return {...prev,
              from: e.target.value}
    })
  }
  function toHandleChange(e){
    setChangeData(prev=>{
      return {...prev,
              to: e.target.value}
    })
  }


  return (
    <div className='app__container'>
      <h1>Online valutaváltó</h1>

      <form action="submit">

        <label 
          htmlFor="amount"
          className='input__section'
        >Összeg
            <input
              name='amount' 
              type='number'
              value={changeData.amount}
              onChange={amountHandleChange}
            />
        </label>

        <label 
          htmlFor="from"
          className='input__section'
        >Erről a valutáról
          <select 
            name="from"
            onChange={fromHandleChange}
            value={changeData.from}
          >
            {currenciesToChooseFrom}
          </select>
        </label>

        <label 
        htmlFor="to"
        className='input__section'
        >Erre a valutára
          <select 
            name="to"
            onChange={toHandleChange}
            value={changeData.to}
          >
          {currenciesToChooseFrom}
          </select>
        </label>
        
        <div className='btnDiv'>
          <button>Mehet</button>
        </div>
      </form>
      <div className='result__section'>
        <p>200 000HUF = </p>
        <h3>620 EUR</h3>
      </div>
    </div>
  );
}

export default App
