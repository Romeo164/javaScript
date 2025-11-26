let name1= prompt ("What is your name ?");
let name2 = prompt("what's your lover name?" );
let love = Math.floor( Math.random ()* (100-0+1)+1);
 let message;
 if(love <20){
  message= "sorry your chance is low!";
}else if(love<50) {
  message= "please take care of each other and listen what your lover wants!;"
}else if (love <80 ){
  message= "yeah you people are doing great ;"
} else{ message= " hurray great chace friend!";}

alert (`your love percentage is ${love}% between both of you!
${message}`);
