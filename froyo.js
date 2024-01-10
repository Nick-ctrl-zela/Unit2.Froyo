let userInput = prompt(
  "Please enter some of your preferred froyo flavors separated by commas."
);

const froyoArray = (userInput) => {
  const userInputArr = userInput.split (",").map(function (value){
    return value.trim();
  })

  const counter = {};
    userInputArr.forEach(flavor => {
      if (counter[flavor]) {
        counter[flavor] += 1;
    } else {
        counter[flavor] = 1;
    }
});

console.log(userInput);
console.log(userInputArr);

return counter
}


console.table(froyoArray(userInput))