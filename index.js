// code your solution here
let saturdayFun = (event = 'roller-skate') => {
        return `This Saturday, I want to ${event}!`;

}
saturdayFun();

function mondayWork(event = 'go to the office'){
    return `This Monday, I will ${event}.`;
}


function statement(msg){
    return msg;
}
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective();
  