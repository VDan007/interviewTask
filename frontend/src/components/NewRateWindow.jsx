
import { useState, useEffect } from "react";
import { makeRate } from '../../devDB';

function NewRateWindow(props){

    const [rateParams,setRateParams ] = useState({
                                        from: 'HUF',
                                        to:   'EUR',
                                        rate: 1
                                        });

    // console.log('rateParams');                                    
    // console.log(rateParams);         
    
    

    const currenciesAvailableToChoose = [
        'HUF','EUR',
        'USD','CHF',
        'GBP','CNY'
    ];

    function handleFromChange(e){
        setRateParams(prev=>{
            return {...prev,
                    from: e.target.value}
        });
    }
    function handleToChange(e){
        setRateParams(prev=>{
            return {...prev,
                    to: e.target.value}
        });
    }
    function handleRateChange(e){
        setRateParams(prev=>{
            return {...prev,
                    rate: e.target.value}
        });
    }
    
    const optionsForSelectCurrencies = currenciesAvailableToChoose.map(item=>{
        return <option value={item} key={item}>{item}</option>
    });

    function closeNRW(e){
        e.preventDefault();
        props.show(false);
    }

    function handleSubmitOfNewRW(e){
        e.preventDefault();
        makeRate(rateParams.from,rateParams.to,rateParams.rate);
        props.show(false);
    }

   return(
        <div className="shaderr">

        <form onSubmit={handleSubmitOfNewRW} className="newRateWindow__container">
            <fieldset>
                <legend>  Új átváltási ráta felvétele  </legend>

                <label 
                htmlFor="from"
                className='input__section__NRW'
                >Erről a valutáról
                <select 
                    name="from"
                    value = {rateParams.from}
                    onChange={handleFromChange}
                >
                    {optionsForSelectCurrencies}
                </select>
                </label>

                <label 
                htmlFor="to"
                className='input__section__NRW'
                >Erre a valutára
                <select 
                    name="to"
                    value={rateParams.to}
                    onChange={handleToChange}
                >
                    {optionsForSelectCurrencies}
                </select>
                </label>
                <label 
                htmlFor="rate"
                className='input__section__NRW'
                >Ráta
                    <input
                    name='rate' 
                    type='number'
                    value={rateParams.rate} 
                    onChange={handleRateChange}
                    min= "0"
                     />
                </label>
                <div className="newRW__btnDiv">
                    <button>Mentés</button>
                    <button onClick={closeNRW}>Mégse</button>
                </div>
            </fieldset>
         </form>

        </div>
   );
}



export { NewRateWindow };