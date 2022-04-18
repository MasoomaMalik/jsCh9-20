// CHAPTER 09-11
// Q1
// var a = prompt('Enter city name')
// if (a== 'Karachi' || a =='karachi'){
//     alert('Welcome to city of lights');
// }

// Q2
// var a = prompt('Enter your gender')
// if (a== 'male' || a =='Male'){
//     alert('Good Morning Sir');
// }
// else if (a== 'female' || a =='Female'){
//     alert('Good Morning Maam');
// }

// Q3
// var clr= prompt('Enter Signal Color');
// if (clr.toLowerCase() == 'red'){
//     alert('Must Stop')
// }
// else if (clr.toLowerCase() == 'yellow'){
//     alert('Ready to Move')
// }
// else if (clr.toLowerCase() == 'green'){
//     alert('Move Now')
// }

// Q4
// var fuel= prompt('Enter your fuel consumption')
// if(fuel <= 0.25 )
// {
//     alert('Please refill the fuel in your car')
// }

// Q5
// DONE MANUALLY, NOTHING TO RECORD

// Q6
// var mm= prompt('Enter maxium marks for all subjects')
// var sub1= prompt('Enter 1st subject'), om1 = +prompt('Enter marks obtained in ' + sub1);
// var sub2= prompt('Enter 2nd subject'), om2 = +prompt('Enter marks obtained in ' + sub2);
// var sub3= prompt('Enter 3rd subject'), om3 = +prompt('Enter marks obtained in ' + sub3);
// om=om1+om2+om3; per= (om)/mm*100
// var grade, remarks

// if(per >= 80)
// {
//     grade = 'A-one'; remarks= 'Excellent'
// }
// else if(per >= 70)
// {
//     grade = 'A'; remarks= 'Good'
// }
// else if(per >= 60)
// {
//     grade = 'B'; remarks= 'You Need to Improve'
// }
// else if(per < 60)
// {
//     grade = 'F'; remarks= 'Sorry'
// }
// document.getElementById("h1").innerHTML = "Marks Sheet"
// document.write('<br><br>')
// document.write('<br>Total Marks : '+mm)
// document.write('<br>Marks Obtained: '+om)
// document.write('<br>Percentage : '+per + '%')
// document.write('<br>Grade : '+grade)
// document.write('<br>Remarks : '+remarks)

// Q7
// secNum=3;
// guessNum= +prompt('Guess the number')
// if(secNum == guessNum){
//     alert('Bingo! Correct Answer')
// }
// else if(secNum == (guessNum+1)){
//     alert('You are close enough to the correct answer')
// }

// Q8
// num=+prompt('Enter a number to check divisblity by 3')
// if(num%3==0)
// {
//    alert( 'Num is divisble')
// }
// else{
// alert('not divisble')
// }

// Q9
// num=+prompt('Enter a number to check even or odd')
// if(num%2==0)
// {
//    alert( 'Num is Even')
// }
// else{
// alert('Num is Odd')
// }

// Q10
// t=+prompt('Enter the Temperature')
// if(t>40){
//     alert('It is too hot outside!')
// }
// else if(t>30 && t<40){
//     alert('The Weather today is Normal.')
// }
// else if(t>20 && t<30){
//     alert('Today’s Weather is cool.')
// }
// else if(t>10 && t<20){
//     alert('OMG! Today’s weather is so Cool.')
// }

// Q11
// function calculate(num1, num2, op) {
//     if (op == '+') {
//         alert(num1 + num2)
//     }
//     else if (op == '-') {
//         alert(num1 - num2)
//     }

//     else if (op == '*') {
//         alert(num1 * num2)
//     }
//     else if (op == '/') {
//         alert(num1 / num2)
//     }
//     else if (op == '%') {
//         alert(num1 % num2)
//     }
// }
// num1 = +prompt('Enter 1st num'), num2 = +prompt('Enter 2nd num'), op = prompt('Enter desired operation')
// calculate(num1, num2, op);

// CHAPTER 12-13
// Q1
// var inp= prompt('Enter any key to check its case');
// if ( inp.charCodeAt()>= 97 && inp.charCodeAt()<= 122){
//     alert('lowercase')
// }
// else if ( inp.charCodeAt()>= 65 && inp.charCodeAt()<= 90){
//     alert('uppercase')
// }

// Q2
// var num1 = prompt('Enter 1st num'), num2 = prompt('Enter 2nd num')
// if( num1 > num2)
// {alert('num1 ' + num1 +  ' is larger')}
// else if( num2 > num1)
// {alert('num2 ' + num2 +  ' is larger')}
// else if( num2 == num1)
// {alert('both numbers are equal')}

// Q3
// var num = +prompt('Enter a pos neg num or zero')
// if (num>0){
//     alert('positive')
// }
// else if (num<0)
// {alert('negative')}
// else if (num == 0 ){
//     alert('num is zero')
// }

// Q4
// var inp=prompt('Enter a character to check if it is  vowel')
// if(inp == 'a' || inp == 'e' || inp == 'i' || inp == 'o' || inp == 'u' )
// {
// alert('true')
// }
// else {alert('false')}

// Q5
// var pswd= 'abc234';
// var inpPswd = prompt('Enter your password');
// if(inpPswd == ''){
//     alert ('Please Enter your password')
// }
// else if (inpPswd == pswd){
//     alert ('Correct! The password you entered matches the original password')
// }
// else if ( inpPswd != pswd ){
//     alert('Incorrect Password')
// }

// Q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else
// {greeting = "Good evening";
// }
// alert(greeting)

// Q7
// Convert 24hrs format into 12hr format
// var userTime = +prompt('Enter time in 24-hour format');
// if(   userTime <= 1200 )
// {
//     userTime= userTime/100
//     alert (userTime+'am')
// }
// else if(   userTime >= 1200 )
// {
//     userTime= (userTime - 1200)/100;
//     alert (userTime+'pm')
// }


// or
// Q7
// var userTime = +prompt('Enter time in 24-hour format');
// if(   userTime < 1200 && userTime>=0000 )
// {
//     userTime= userTime/100
//     alert (userTime+'am\n Good Morning')
// }
// else if(   userTime >= 1200  && userTime < 1700 )
// {
//     userTime= (userTime - 1200)/100;
//     alert (userTime+'pm \n Good Afternoon')
// }
// else if(   userTime >= 1700  && userTime < 2100 )
// {
//     userTime= (userTime - 1200)/100;
//     alert (userTime+'pm \n Good Evening')
// }
// else if(   userTime >= 2100  && userTime < 2359 )
// {
//     userTime= (userTime - 1200)/100;
//     alert (userTime+'pm \n Good Night')
// }

// CHAPTER 14-16 ARRAYS

// Q1
// var a=[];

// Q2
// const myArray = new Array();

// // Q3
// var strArr = ['a','e','i','o','u']
// alert(strArr);

// Q4
// var numArr = [1, 2, 3, 4, 5]
// alert(numArr)

// Q5
// var boolArr = [true, false]
// alert(boolArr)

// Q6
// var mixArr = ['a', 'b', 'c', 1 ,2 ,3 ,-3, true , false]
// alert(mixArr)

// Q7
// var eduPak = [ 'SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
// document.write('Qualification<br>')
// for (i=0; i<eduPak.length;i++){
//     document.write('<br>' +(i+1)+') '+eduPak[i]);
// }

// Q8
// var stNames = ['Michael', 'John', 'Tony'];
// var om= [320 ,230, 480]
// mm = 500;
// for (i=0 ; i<3; i++){
//     document.write('<br> Score of '+ stNames[i]+ ' is '+ om[i]+ '. Percentage: ' + om[i]/mm*100 + '%')
// }

// Q9
// var clr=['violet','indigo','blue','green','yellow','red'];
// alert(clr);
// var userInp=prompt('what color do you want to add to the beginning');
// clr.unshift(userInp);
// alert(clr);
// var userInp=prompt('what color do you want to add to the end');
// clr.push(userInp);
// alert(clr);
// clr.unshift('pink')
// clr.unshift('orange')
// alert('new colors array\n'+clr);
// clr.shift();
// alert('After deleting first color\n'+clr);
// clr.pop();
// alert('After deleting last color\n'+clr);
// index=prompt('At which index you want to add a color');
// userInp= prompt('Which Color')
// clr.splice(index,0,userInp);
// alert(clr);
// index=prompt('At which index you want to add a color');
// count=prompt('How many colors?')
// clr.splice(index,count);
// alert(clr);

// Q10
// scores= [320,230,480,120]
// alert('Unsorted Array \n'+scores)
// scores.sort();
// alert('Sorted Array \n'+scores)

// Q11
// cities_list=['Karachi','Lahore','Islamabad','Quetta','Peshawar']
// alert('Cities List: '+cities_list)
// selected_cities= cities_list.slice(2,4)
// alert('Selected Cities: '+selected_cities)

// // Q12
// var arr = ['This','is','my','cat'];
// document.write('Array: <br>'+ arr)
// var str= arr.join(' ');
// document.write('<br> String: <br>'+ str)

// Q13
// var dvc=[]
// dvc.push('keyboard')
// dvc.push('mouse')
// dvc.push('printer')
// dvc.push('monitor')

// document.write(dvc+'<br>')

// document.write('<br> Out: <br>'+dvc.shift())
// document.write('<br> Out: <br>'+dvc.shift())
// document.write('<br> Out: <br>'+dvc.shift())
// document.write('<br> Out: <br>'+dvc.shift())

// q14
// var dvc=[]
// dvc.push('keyboard')
// dvc.push('mouse')
// dvc.push('printer')
// dvc.push('monitor')

// document.write(dvc+'<br>')

// document.write('<br> Out: <br>'+dvc.pop())
// document.write('<br> Out: <br>'+dvc.pop())
// document.write('<br> Out: <br>'+dvc.pop())
// document.write('<br> Out: <br>'+dvc.pop())

// q15
// var manuf= ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
// for(i=0;i<manuf.length;i++){
//     document.write('<br>'+manuf[i])
// }

// CHAPTER 17-20
// Q1
// var multArr = [[1,1],[2,2],[3,3],[4,4]]
// console.table(multArr)

// Q2
// var multArr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// for(i=0;i<multArr.length;i++){
//     document.write('<br>')
//     for(j=0;j<4;j++)
//        { x=multArr[i];
//            document.write(x[j])}
//     }

// Q3
// for(i=1;i<11;i++){
//     document.write(i+'<br>')
// }

// Q4
// userInp=+prompt('Enter a number to show its multiplication table')
// userLen=+prompt('Enter Length')
// document.write('Multiplication of Table '+userInp+' of Length '+userLen+'<br>')
// for(i=1;i<=userLen;i++){
//     document.write(userInp+' x '+ i + ' = '+userInp*i+'<br>')
// } 

// Q5
// fruits = ['apple','banana','mango','orange','strwaberry']
// for(i=0;i<fruits.length;i++){
//     document.write('<br>'+fruits[i])
// }
// for(i=0;i<fruits.length;i++){
//     document.write('<br> Element at index '+i+' is ' +fruits[i])
// }

// Q6
// document.write('Counting:<br><br>')
// for(i=1;i<=15;i++){
//     document.write(i+',')
// }

// document.write('<br><br> Reverse Counting:<br><br>')
// for(i=10;i>=1;i--){
//     document.write(i+',')
// }

// document.write('<br><br>Even:<br><br>')
// for(i=0;i<=20;i++){
//     if(i%2==0){
//     document.write(i+',')
//     }
// }

// document.write('<br><br>Odd:<br><br>')
// for(i=0;i<=20;i++){
//     if(i%2!=0){
//     document.write(i+',')
//     }
// }

// document.write('<br><br>Series:<br><br>')
// for(i=1;i<=20;i++){
//     if(i%2==0){
//     document.write(i+'k, ')
//     }
// }

// Q7
// A=['cake','apple pie','cookie','chips','patties']
// var userInp=prompt('Welcome to ABC Bakery. What do you want to order Sir/Ma\'am?')
// for(i=0;i<5;i++){
//     console.log('<br>i'+i)
//    console.log('<br>A[i] '+A[i])
//     console.log('<br>userInp '+userInp)
//     if(userInp===A[i])
//     {
//         alert(userInp +' is available at index '+i+' in our bakery.')
//         flag=false;
//         break; 
//     }
//     else if (userInp!==A[i]){
//         var flag=true;
//        }
    
// } 
// if(flag==true){
//     alert('We are sorry. '+userInp+' isn\'t available in our bakery')
// }

// Q8
// A=[24,53,78,91,12]
// largest=0
// for (i=0; i<=largest;i++){
//     if (A[i]>largest) {
//         var largest=A[i];
//     }
// }
// document.write('Array Items: '+ A)
// document.write('<br>The Largest Number is: '+largest)

// // Q9
// A=[24,53,78,91,12]
// var smallest =A[0]
// for (i=0; i<=smallest;i++){
//     if (A[i]<smallest) {
//         var smallest=A[i];
//     }
// }
// document.write('Array Items: '+ A)
// document.write('<br>The Smallest Number is: '+smallest)

// Q10
// for(i=1; i<=100;i++){
//     if(i%5==0){
//         document.write(i+', ')
//     }
// }






















































































