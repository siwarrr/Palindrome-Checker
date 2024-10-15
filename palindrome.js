const inputTextElement = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultSpan = document.getElementById("result");

const regular = (str) => {
  const regex =  /[^a-zA-Z0-9]/g;  
  return str.replace(regex, '').toLowerCase();
}

const palindrome = (userInput) => {
  const cleanedStr = regular(userInput);
  console.log(cleanedStr);
  const reverseStr = cleanedStr.split('').reverse().join('');
  console.log(reverseStr);
   if (cleanedStr === reverseStr) {
     return `${userInput} is a palindrome`;
   } 
   else {
     return `${userInput} is not a palindrome`
   }
}

const checkResult = () => {
  const userInput = inputTextElement.value;
  if(inputTextElement.value === "") {
    resultSpan = alert("Please input a value");
  } 
  else {
    resultSpan.textContent = palindrome(userInput);
  }
}
checkButton.addEventListener("click", checkResult);

