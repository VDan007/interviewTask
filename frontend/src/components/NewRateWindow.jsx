

function NewRateWindow(props){

    function closeNRW(e){
        e.preventDefault();
        props.show(false);
    }

    function handleSubmitOfNewRW(){
        null
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
                    
                >
                    
                </select>
                </label>

                <label 
                htmlFor="to"
                className='input__section__NRW'
                >Erre a valutára
                <select 
                    name="to"
                    
                >
               
                </select>
                </label>
                <label 
                htmlFor="rate"
                className='input__section__NRW'
                >Ráta
                    <input
                    name='rate' 
                    type='number'
                    
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