// wat is js: front web scripting language for dynamic and interactive web images
// print text
console.log("Hello world")

// variables:data container

a = 10
b = 12

console.log(a,b)
let color_1 = 'red'
const country="Nigeria"
console.log(country)
console.log(color_1)

// data types
// number types:
n1 = 12 //number
n2 = 0.5 //number
n3 = -4 //number

//string : array of characters - plain text in quotes "",''
name = "shamsiya" //str
state = 'FCT' //str


mix = "example 12"
mix1 = "12"

//Boolean : value that can only be true or false
bool1 = true
bool2=false

// undefined : a variable without a value or undefined
let my_state //undefined
state2 = undefined //undefined
state2 = '' //string

//array : list
colors = ["red", 'blue', "pink", 'purple']
score = [12,56,23,89 ]
mx = [12, true, "shamsiya", undefined,['BMW', "Honda"]]
console.log(mx)
console.log(score)
console.log(colors)
console.log(colors[0]) //red
console.log(colors[3]) //purple

// 1. create 3 each of the data type and print their values
/* 2.
Courses = [
    [py,cpp,php],
    "css", "Bootstrap", JS
    [Jquery,Typescript]
]
a. print py,css,Jquery and php from courses
b.how many items are there in courses

*/

// Operators: Arithmetic operators [+, /, *, -, %, **] 
console.log(12 + 10) //22
console.log(3 ** 3) //3*3*3=27
console.log(3 / 3) // 1 r 0
console.log(3 % 3) //0 modulus

// operators: comparison [==, ===, >, >=, <, <=]
console.log(3 > 6) //false
console.log(3 > 3) //false
console.log(3 >= 6) //true
console.log(10 == 10) //true
console.log(3 == "10") //true
console.log(3 === "10") //false
console.log("10" === "10") //true

// logical operators [&& ans not, || as OR and ! as NOT]
console.log(10>4 && 4<2) //false
console.log(10>4 || 4<2) //true
console.log(!10>4) //false

console.log('user001' == 'user001' && 'user_pass' =='my_password')

// assignment operators [=, +=, -=, /=, *=, %]
a = 2
a = 4
a = a //4
a = a + 10 //14
a = a-7 //7

a += 10 //17
a -= 8 //9

// typeof 
console.log(typeof "") //string
console.log(typeof[]) //array-object
console.log(typeof true) //boolean

//tenary operators : short conditional statement
// temary is used to select a branch or alt out of
// multiple based on a condition
bal = 10
w = 6
can_w =bal >w ? "can withdraw" : "insufficient funds"
console.log(can_w)

//write a program that reurns can vote if a
// users age is above 18 else returns Not eligible to vote

vote = 18
not_eligible = 17
can_vote = vote > not_eligible ? "can vote" : "cannot vote"
console.log(can_vote)

user = 'solomon'
user = "solomon"
user = 'mary'

user1 = ''
console.log(10 + 10) //20
console.log(10 + "10") //1010
console.log(10 / "10") //1
console.log(10 * "10") //100
console.log(10 * "10") //NaN - Not a Number

//function :  reusable block of code that performs a task
//function declaration: create a function
//function call : use of execute the function

function my_first_function(){
    console.log("Hello world")
}

my_first_function()
my_first_function()
my_first_function()
my_first_function()

