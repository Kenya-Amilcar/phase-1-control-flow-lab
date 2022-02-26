function scuberGreetingForFeet(feet){
  let result 
  if (feet <= 400) {
    result = "This one is on me!";
  }
  if (feet >= 2000) {
    result = "I will gladly take your thirty bucks.";
  }
  if (feet > 2500) {
    result = "No can do.";
  }

  return result;
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);


function ternaryCheckCity(city){
  let result
  city === 'NYC' ? (result = "Ok, sounds good.") : (result = "No go.");
  
  return result;
}
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(response){
  let result
  switch(response) {
    case 'generous':
      result = "Thank you so much.";
      break;
    case 'not as generous':
      result = "Thank you.";
      break;
    case "thanks for everything":
      result = "Bye.";
      break;
  }
  return result
}