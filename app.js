// Chapter No. 35 to 38 FUNCTION

//Question No. 1

var todayDate = new Date();
document.write(todayDate);


//Question No. 2

function fullName(f , l){
    console.log(f , l);
}

var firstName = prompt("Enter your First Name");
var secondName = prompt("Enter your Second Name");
fullName(firstName , secondName);


//Question No. 3

function sum(a , b){
    return a + b;
}
var firstNum = +prompt("Enter First Number");
var secondNum = +prompt("Enter Second Number");
var res = sum(firstNum, secondNum);
console.log(res);



//Question No. 4

function calculator(N1 , opr , N2){
    if (opr === "+") {
        return N1 + N2;
    }
    else if (opr === "-") {
        return N1 - N2;
    }
    else if (opr === "*") {
        return N1 * N2;
    }
    else if (opr === "/") {
        return N1 / N2;
    }
}
var num1 = +prompt("Enter First Number");
var operator = prompt("Enter Operator e.g. +,-,/,*");
var num2 = +prompt("Enter Second Number");
console.log(calculator(num1, operator, num2));



//Question No. 5

function squares(num){
    return num + num;
}
var ans = squares(10);
console.log(ans);



//Question No. 6

function factorial(number){
    if(number === 0 || number === 1){
        return 1;
    }
    else{
        return number * factorial(number - 1);
    }
}
var answer = factorial(5);
console.log(answer);


//Question No. 7

function counting(open, close){
    if(open < close){
        document.write("<h3>Counting:</h3>");
        for(var i = open; i <= close; i++){
            document.write(i,"<br>");
        }
    }
    else if(open > close){
        document.write("<h3>Reverse Counting:</h3>");
        for(var i = open; i >= close; i--){
            document.write(i,"<br>");
        }
    }
    else{alert("Please fill correct put this field")}
}
var start = +prompt("Enter number to start counting");
var end = +prompt("Enter number to end counting");
counting(start, end);


//Question No. 8

function calcHypotenuse(base, perpendicular){
    function calcSquare(empty){
        return empty ** 2;
    }
    var baseSquare = calcSquare(base);
    var perpendicularSquare = calcSquare(perpendicular);
    var hypoSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypoSquare);
    return hypotenuse;

    //========================OR========================\\
    
    // var baseSquare = Math.pow(base,2);
    // var perpendicularSquare = Math.pow(perpendicular,2);
    // var hypoSquare = baseSquare + perpendicularSquare;
    // var hypotenuse = Math.sqrt(hypoSquare);
    // return hypotenuse;
}

var baseLength = 3;
var perpendLength = 4;
var result = calcHypotenuse(baseLength, perpendLength);

console.log("Hypotenuse:", result);



//Question No. 9

//i. Arguments as value
function area(w , h){
    return w * h;
}
var area = area(5 ,10);
console.log(area);


//ii. Arguments as variables
function areas(width, height){
    return width * height;
}
var width = 3;
var height = 5;
var areas = areas(width, height);
console.log(areas);

    //========================OR========================\\

function Area(){
    var widths = 4;
    var heights = 5;
    return widths* heights;    
}
var Area = Area();
console.log(Area);



// Question No. 10

var userWord = prompt("Enter a Word");
var userWordLower = userWord.toLowerCase();
var correct = "";

for(var i = 0; i < userWord.length; i++){
    if(userWord.slice(i ,i+1) === " "){
       var flag = "true";
    }
}

for(var i = userWord.length -1; i >= 0; i--){
    correct += userWordLower[i];
    }

    if(correct === userWordLower){
        var star = "true";
    }


function palindrome(){
    if(flag === "true"){
        return "Space is not allowed";
    }
    else if(star === "true"){
        return userWord + " is a palindrome word";
    }
    else{
        return userWord + " is not a palindrome word";
    }
}

var result = palindrome();
if(flag === "true"){
    alert(result);
}
else{
    console.log(result);
}


