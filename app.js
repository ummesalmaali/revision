// // function add (numbers){
// //     var larger = numbers[0]
// //     for(var i = 0; i < numbers.length; i++)
// //     element = numbers[0]
// //     if (element > larger){
// //         larger = element
// //     }
// //     return larger;
// // }
// // var numbers = [12, 24, 16, 19]
// // var output = add(numbers);
// // console.log(output);
// // function largestNumber(numbers){
// //     var larger = numbers[0];
// //     for(var i = 0; i < numbers.length; i++){
// //         var element = numbers[i]
// //         if(element > larger){
// //             larger = element;
// //         }
// //     }
// //      return larger
// // }
// //  var output = largestNumber([45,67,87,90]);
// //  console.log(output);
// function biggestNumber(numbers){
//     var larger = numbers[0];
//     for(var i = 0; i <numbers.length; i++){
//         var element = numbers[i];
//         if(element > larger){
//             larger = element;
//         }
//     }
//     return larger;
// }
// var numbers = [34, 78, 98, 97,]
// let output = biggestNumber(numbers);
// console.log(output);
// function inchToFeet(inch){
//     var feet = inch / 12;
//     return feet
// }
// let dearFeet = inchToFeet(288);
// console.log(dearFeet);
// let lionFeet = inchToFeet(300);
// console.log(lionFeet);
// let duckFeet = inchToFeet(156);
// console.log(duckFeet);
// var name = 'jab';
// if(name.length > 4){
//     name = 'jabu'
// }
// console.log(name);
// let year = 3996
// let reminder = year % 4;
// if(reminder == 0){
//     console.log('your year is a leap year');
// }
// else{
//     console.log('your year is not a leap year');
// }
// function isLeapYear (year){
//     let reminder = year % 4
//     if(reminder == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let check2000 = isLeapYear(1702);
// console.log(check2000);
// function isFactorial(n){
//     var factorial = 1;
// for (let i = 1; i <= n; i++) {
//      factorial = factorial * i;
    
    
// }
// return factorial;
// }
// let firstCall = isFactorial(6);
// let secondCall = isFactorial(10);
// console.log(firstCall);
// console.log(secondCall);
// function fibonacci (n){
//     if (n == 0 ){
//         return 0
//     }
//     if (n == 1){
//         return 1
//     }
//     else{
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
// }
// let result = fibonacci(10)
// console.log(result);
// let business = 450;
// let minister = 650;
// let secretariat = 950;
// var result = Math.max = (business,minister,secretariat)
// console.log(result);
// if (business > minister){
//     if(business > secretariat){
//         console.log('business is bigger ');
//     }
//     else{
//         console.log('secretariat is bigger');
//     }
// }
// else{
//     console.log('minister is bigger');
// }
// let marks = [34, 78, 88, 98, 99,]
// let max = marks[0];
// for (let i = 0; i < marks.length; i++) {
//     const element = marks[i];
//     if(element > max){
//         max = element;

//     }
    
// }
// console.log('The highest value is', max);
// let friendsName = ['suraiya', 'julie', 'ferdoussss', 'salma']
// var lengthyName = friendsName[0];
// for (let i = 0; i < friendsName.length; i++) {
//     const element = friendsName[i];
//     if(element > lengthyName){
//         lengthyName = element
//     }
    
// }
// console.log('the lengthy name is', lengthyName);


// var marks = [45, 65, 87, 89, 98, 87]
// var max = marks [0]
// for (let i = 0; i < marks.length; i++) {
//     const element = marks[i];
//     if(element > max){
//         max = element
//     }
    
// }
// console.log('the highest value is', max);

// function getArraySum (numbers){
//     let sum = 00;
// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//       sum = sum + element;
    
// }
// return sum
// }
// let numbers = [50,60,10]
// let call1 = getArraySum(numbers);
// console.log(call1);

// let call = getArraySum([100, 500, 600, 200])
// console.log('the addition is',call);
// var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];

// var allNames = "";

// for(var i = 0; i< friends.length;i++){

//     var name = friends[i];

//     allNames = allNames + name ;

// }

// console.log(allNames)
// let friendsName = ['suraiya', 'julie', 'ferdoussss', 'salma']
// var lengthyName = ['']
// for (let i = 0; i < friendsName.length; i++) {
//     const element = friendsName[i];
//     if(element > lengthyName){
//         lengthyName = element
//     }
    
// }
// console.log(lengthyName);
// let id = [3, 5, 7 , 3, 9, 7, 5, 6, 11]
// let filterFake = []
// for (let i = 0; i < id.length; i++) {
//     const element = id[i];
//     let checking = filterFake.indexOf(element)
//     if(checking == -1){
//         filterFake.push(element);
//     }
    
// }
// console.log(filterFake);
// let duplicateFood = [5, 6, 7, 3, 5, 7, 4 ,2, 3, 5, 7, 11, 4]
// let pureFood = []
// for (let i = 0; i < duplicateFood.length; i++) {
//     const element = duplicateFood[i];
//     let verify = pureFood.indexOf(element)
//     if(verify == -1){
//         pureFood.push(element)
//     }
    
// }
// console.log(pureFood);
// let speech = "I am a good girl. i understand everything very easily. i want to be a programmer."
// let letter = 0;
// for (let i = 0; i < speech.length; i++) {
//     const element = speech[i];
//     if(element == " "){
//        letter++;
//     }
    
// }
// console.log(letter);
// function getString(str){
//     let reverse = ""
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         reverse = element + reverse
        
//     }
//     return reverse
// }
// var statement = "hey bro whats up??"
// let gotIt = getString(statement)
// console.log(gotIt);
// function factorialRecursive (num){
//     if(num == 1){
//         return num
//     }
//     else{
//         return num * factorialRecursive(num - 1)
//     }
// }
// var result = factorialRecursive(5);
// console.log(result);
//assignment 3

// function kilometertoMeter(kilo){
//    var length = kilo*1000
//    return length
// }
// var input = kilometertoMeter(5);
// console.log('Meter output is',input);
// // 2.budgetCalculator
// function budgetCalculator(){
//     let mobile = 0;
//     let warch = 0;
//     let laptop = 0;

// }

//3.hotelCost
//4.megaFriend
// let megaFriend = ['salam', 'umme', ' kaikobad', 'sayed', 'sultana']
// for (let i = 0; i < megaFriend.length; i++) {
//     const element = megaFriend[i];
//     if(megaFriend > element){
//         return megaFriend
//     }
    
// }
// console.log(megaFriend)
// var friends = [23,45,45,76]
// let myself = {
//     color: 'brown',
//     gender: 'female',
//     age: 20,
//     cell: 78338746
// }
// let get = myself['cell']
// console.log(get);
// var authors = document.getElementsByClassName('author')
// for (let i = 0; i < authors.length; i++) {
//     const element = authors[i];
//     console.log(element.innerHTML);
//     element.innerHTML = 'writer-' + (i+1)
//     element.style.backgroundColor = 'yellow';
//     element.setAttribute('title', 'hey dont go far just write books')
    
// }
// document.body.style.backgroundColor = 'yellow'
// let nums = [12, 5, 7, 8, 6, 44, 32, 77,88]
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//    if(num % 2 ==0){
//   console.log(num, 'is an even number');
//    }
//    else{
//        console.log(num,'is an odd number');
//    }
    
// }
// function evenify_all(nums){
//     var result
    
    
//         if(nums % 2 == 0){
//             result= num;
//         }
//         else{
//            result = nums*2;
//         }
//         return result
        
//     }

// var result = evenify_all(13)
// let square = result * result
// console.log(square);
// function understandingCall(name, age, task){
//     console.log(name, 'your name')
//     console.log(age, 'your age')
//     task();

// }
// function washHand(){
//     console.log('wash your hand before eating');
// }
// function takeShower(){
//     console.log('take shower before eating');
// }
// function scrollFb(){
//     console.log('dont listen my call just scrolling');
// }
// understandingCall('Kaikobad Ali', 16, washHand);
// understandingCall('joabyed ali', 16, takeShower)
// understandingCall('nayem', 20, scrollFb)
// function addNumbers (num1,num2){
//     var sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         const num = arguments[i];
//         sum = sum + num
        
//     }
//     return sum
// }
// let result = addNumbers(3,4,5,6)
// console.log(result);
function handleClick(){
    console.log('jin e narassej ettw fast ty')
}

