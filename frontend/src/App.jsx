import { useState,useEffect } from 'react';
import {currencies, currencies as penz, changeLogic}  from '../devDB'; ///////delet before shipping
import { NewRateWindow } from './components/NewRateWindow';

console.log(currencies);

function App() {
  const [changeData,setChangeData] = useState({
    amount:0,
    from:'HUF',
    to:'EUR',
  });
  // console.log(changeData);
  const [currencies,setCurrencies] = useState([]);
  const currenciesToChooseFrom = currencies.map(item=>{
    return <option key={item} value ={item}>{item}</option>
  });
  const [getInfoFromServer,setGetInfoFromServer] = useState(true);
  const [result,setResult] = useState(0);
  //console.log(result);
  const [showResult,setShowResult] = useState(false);
  const [showNRW,setShowNRW] = useState(false);

  useEffect(
    ()=>{
        ///get currencies from db
        fetch('/symbols')
        .then(res=>res.json())
        .then(data=>setCurrencies(data))
        
    },[]
  );
  useEffect(
    ()=>{
        ///////make server calculate
      
        setResult(
          changeLogic(changeData.amount,changeData.from,changeData.to)
        );
       
    },[getInfoFromServer]
  );

  function openNRW(){
    setShowNRW(true);
  }


  function amountHandleChange(e){
    setShowResult(false);
    setChangeData(prev=>{
      return {...prev,
              amount: e.target.value}
    })
  }
  function fromHandleChange(e){
    setShowResult(false);
    setChangeData(prev=>{
      return {...prev,
              from: e.target.value}
    })
  }
  function toHandleChange(e){
    setShowResult(false);
    setChangeData(prev=>{
      return {...prev,
              to: e.target.value}
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    if( changeData.from === changeData.to ){
      alert('You choose the same currencies, please change either of them');
    } else if( changeData.amount == 0){
      alert('Please choose an amount bigger than zero');
    } else {
      setGetInfoFromServer(prev=>!prev);
      setShowResult(true);
      console.log('works');
    }
  }


  return (
    <div className='app__container'>
      <h1>Online valutaváltó</h1>

      <form onSubmit={handleSubmit}>

        <label 
          htmlFor="amount"
          className='input__section'
        >Összeg
            <input
              name='amount' 
              type='number'
              value={changeData.amount}
              onChange={amountHandleChange}
              min= "0"
              
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
          <button id='mehetBtn'>Mehet</button>
          <button 
            type='button' 
            id='newRateBtn'
            onClick={openNRW}
          >Új átváltási ráta felvétele
          </button>
        </div>
      </form>

      {showResult && <div className='result__section'>
        <p>{changeData.amount} {changeData.from}</p>
        <h3>{result.toFixed(2)} {changeData.to}</h3>
      </div>}
      {showNRW && <NewRateWindow
                   show={setShowNRW} />}
    </div>
  );
}

export default App
