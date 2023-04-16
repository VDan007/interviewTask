const currencies = ['HUF','EUR'];



function changeLogic(amount,from,to){
            
    const rate = 330;

    if(from === 'HUF'){
        return amount / rate;
    } else if ( from === 'EUR'){
        return amount * rate;
    }
}

export { currencies, changeLogic };