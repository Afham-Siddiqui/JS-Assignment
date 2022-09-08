/* Q1: Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights” */

/* let userinput = prompt("Enter your city name.....")
if ( userinput="karachi" ){
    document.write("WELCOME TO THE CITY OF LIGHTS")
}
else {
    document.write("")
} */




/* Q2: Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am. */

/* let userinput = prompt("Enter your gender.... Are you male or female???");
if ((userinput == "male")) {
  document.write("Good Morning Sir");
} else {
  document.write("Good Morning Ma'am");
}
 */




/* Q3: Write a program to take input remaining fuel in car (in
    litres) from user. If the current fuel is less than 0.25litres,
    show the message “Please refill the fuel in your car”
 */

/* let userinput = prompt("Enter amount of fuel that you have in your car....")
if (userinput < "0.25"){
    document.write("Please refill the fuel in your car.")
}
else{
    document.write("")
} */




/* 
    Q4: Write a JavaScript program that accept two integers and
    display the larger. Also show if the two integers are equal.  */

/* let num1 = prompt("Enter first integer....")
let num2 = prompt("Enter second integer....")

if (num1>num2){
    document.write("The greater integer is " +num1)
}
else if (num2>num1) {
    document.write("The greater integer is "+num2)
}
else if (num1=num2){
    document.write("Both the integers are equal.")
} */




/* Q5: Write a program that takes input a number from user &
state whether the number is positive, negative or zero. */

/* let userinput = prompt("Enter number....")
if (userinput<0){
    document.write("The entered number is negative.")
}
else if (userinput>0)
{
    document.write("The entered number is positive.")
}
else {
    document.write("The entered number is zero.")
} */




/* Q6: Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise */

/* let userinput = prompt("Enter any alpahabet.")
if (userinput.length==1){
    if (userinput== "a" || userinput== "e" || userinput=="i" || userinput=="o" || userinput== "u" )
    document.write("Entered alphabet is a vowel.")

    else {
        document.write("Entered alphabet is not a vowel")
    }
}
else {
    document.write("Please enter only one character ")
} */




/* Q7: Write a program that 
Store correct password in a JS variable. 
Asks user to enter his/her password 
Validate the two passwords: 
i.  Check if user has entered password. If not, then
give message “ Please enter your password” 
ii.  Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise. */

/* let userpassword = prompt("Please, Enter your password.")
if (userpassword=="afham"){
    document.write("Correct password!")
}
else{
    document.write("Incorrect password!")
} */