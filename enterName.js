//Написати promt(), і щоб хтось ввів туди своє name. Через 5 сек кожні 2 сек 10 разів вивести 'I love &{name}'. 

let userName = readUserName();

setTimeout(function showExpression(userName){
  let num = 1;

  let timer = setInterval(function(){
    console.log(`I love ${userName}`);

    if(num === 10){
      clearInterval(timer);
    }
    num++;

  }, 2000)  

}, 5000, userName)

function readUserName(){
  let userName = prompt('Enter your name', 'Dasha');
  if(isUserNameIncorrect(userName)){
    return readUserName();
  }
  
  return userName;
}

function isUserNameIncorrect(userName){
  return userName === '' || userName === ' ' || Number(userName);
}