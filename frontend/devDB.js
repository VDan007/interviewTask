const currencies = ['HUF','EUR'];

const rates = {
    HUFtoEUR: 1/330,
    EURtoHUF: 330,
};

function changeLogic(amount,from,to){

   const key =  `${from}to${to}`;

            
  return  amount * rates[key];
}

export { currencies, changeLogic };