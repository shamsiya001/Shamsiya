//function :  reusable block of code that performs a task
//function declaration: create a function
//function call : use of execute the function
function sum(a,b){
    console.log(a+b)
}

function area_of_circle(r){
    area = (22/7) * r**2
    console.log(area)
}
sum(12,78)
sum(1,7)
area_of_circle(4)
area_of_circle(1)

//Methods
//a function that is a property of an object - object owns a function 
person = {
    name: "solomon",
    course: "front End",
    duration:"2 Weeks",
    details:function(){
    console.log("my name is " + this.name +
        " am learning " + this.course + " lasting for " + this.duration)
        
    }

}

person2={...person}
p3 = {...person}
person2.name = "mary"
p3.name = "mark"
p3.course = "back end"
p3.duration = '5 weeks'
person.details()
person2.details()
p3.details()



//string methods: applies string data type
str ="hello world"
console.log(str.length)// len of a string
console.log(str.indexOf())//find a string - first occurence
console.log(str.lastindexOf)//find a string - last occurence
console.log(str[0])// return a string at an index
console.log(str.charAt(2))//return a string at an index
console.log(str.toUpperCase())//return an upper case string
console.log(str.toLowerCase())//return a lower case
console.log(str+"learning JS")//concatenation
console.log(str.concat("learning JS"))//concatenation
console.log(`${str} learning JS `)//concatenation
console.log(str.slice(1,2))//returns a new string between the give index
console.log((10).toString())//converts a number to a string

//number and math methods
n1 = 12.454554
console.log(n1.toFixed())
console.log(Math.round(n1)) //rounds to the nearest int
console.log(Math.floor(n1)) //rounds down
console.log(Math.ceil(n1)) //rounds up
console.log(Math.random()) //rounds up

function response(){
    status = 1 ? "Yes" : "No"
    console.log(status)
    //"", true
    //0, false, '', undefined, null
}
function response(){
    check = Math.round(Math.random())
    status = check ? "Yes" : "No"
    console.log(status)
}

//
Math.random() * 7000
Math.round(n1)

// create a function that takes a 
// user first and last name and return initials
// example John Doe JD

// create a function that create a unique invoice id
// example #453232

// create a function that creates user_name using
// first, last letter from full name and additional 5 numbers
// example John Doe JE45459

// create a function that takes a number and converts to base 16 and 2

function initials(first, last){
    return first[0] + last[0]
}
console.log(initials("sham", "timi"))

function invoiceid(){
    return "t" + Math.floor(10000 + Math.random() *90000)
}
console.log(invoiceid())


function User_name(first, last){
    return first[0] + last[0] + Math.floor(10000 + Math.random() * 90000)
}
console.log (User_name("sham", "timi"))

function converts(num){
    console.log(num.toString(16))
    console.log(num.toString(2))
}
converts(25)

//Conditional statement
age = 0
status = age > 18 ? "can vote" : "can not vote" 
if(age > 18){
    console.log("can vote")
}else{
    console.log("can not vote")
}

if (age <=1 ) console.log('infant')
else if (age >1 && age <=5) console.log('Todler')
else if (age >5 && age <=10) console.log('Average')
else if (age >10 && age <=18) console.log('Teenager')
else if (age >18 && age <=25) console.log('Youth')
else console.log('Adult')

//classwork
// write a program that returns "morning",
//"afternoon", or "evening" based on time

time = 23
if (time < 12) console.log("morning")
else if (time >=12 && time <16) console.log("afternoon")
else console.log("evening")
 
users = ['solomon', 'mary', 'mark']
// return true if mark is in the array
is_found = true
users.forEach(U =>{
    if(U =="mark") is_found = true
})
console.log(is_found)

console.log(users.includes('mark')) //

users = [
    {"name":"solomon sonex", status : true},
    {"name":"rose", status : false},
    {"name":"mary", status : false},
    {"name":"henry", status : false},
]
users.forEach(U =>{
    console.log(U.status ? U.name:"")
})

//print users where status true

my_class = {
    name:"jss 1A",
    capacity: 30,
    department : "junior school",
    class_teacher:"solomon sonex",
    students:[
        {
            fullname:"mary henry",
            subjects:[
                {name:"maths", score:78},
                {name:"eng", score:90},
            ]
        }
    ]
}





