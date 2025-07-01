// destructing object

const value = {
    name :"zaid",
    surname:"badgujar"
}

const { name: firstName , surname:lastName} = value // firstName = zaid lastName = badgujar

// nested destructing

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const {today :{ low: lowToday, high: highToday}} = LOCAL_FORECAST
  

  // array destructuring 

  const arr = [1,2,3,4,5];
  [a, b] = arr // 12 or comma ,, for differnt val

  // or swapping
   let a=4 , b=5;
   [a,b]=[b,a]// 4 , 5