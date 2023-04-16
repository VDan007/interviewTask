const currencies = ['HUF','EUR'];

const rates = {
    HUFtoEUR: 1/330,
    EURtoHUF: 330,
};

function changeLogic(amount,from,to){

   const key =  `${from}to${to}`;

            
  return  amount * rates[key];
}

function makeRate(from,to,rate){
  console.log(`${from}to${to}: ${rate}`);
  console.log(`${to}to${from}: 1/${rate}`);
}

export { currencies, changeLogic, makeRate };