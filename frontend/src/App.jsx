import { useState } from 'react'



function App() {


  return (
    <div className='app__container'>
      <h1>Online valutaváltó</h1>

      <form action="submit">

        <label 
          htmlFor="amount"
          className='input__section'
        >Összeg
            <input name='amount' type="number"
            />
        </label>

        <label 
          htmlFor="from"
          className='input__section'
        >Erről a valutáról
          <select name="from">
            <option value="">huf</option>
            <option value="">eur</option>
          </select>
        </label>

        <label 
        htmlFor="to"
        className='input__section'
        >Erre a valutára
          <select name="to">
            <option value="">huf</option>
            <option value="">eur</option>
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
