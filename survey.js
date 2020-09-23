const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  let name = answer;

rl.question("What's an activity you like doing? ", (activitye) => {
  let activity = activitye;
  rl.question("What do you listen to while doing that? ", (whyw) => {
    let why = whyw;
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (fav) => {
      let favMeal = fav;
      rl.question("What's your favourite thing to eat for that meal? ", (food) => {
        let favFood = food;
        rl.question("Which sport is your absolute favourite? ", (sport) => {
          let favSport = sport;
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (kappa) => {
            console.log(`Your name is ${answer}\n Your favourite activity is ${activity}\n Your favourite music is ${whyw}\n Your favourite meal is ${favMeal}\n Your favourite food is ${favFood}\n Your favourite sport is ${favSport}\n Your superPower is ${kappa}`);
            rl.close();
          });
          
          
        });
        
        
      });
      
      
    });
    
    
  });
  
  
});



});

